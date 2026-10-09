"use server";

import { Resend } from "resend";

export type FormState = {
  success: boolean;
  message: string;
} | null;

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );

type Touch = {
  params?: Record<string, unknown>;
  landing_page?: unknown;
  referrer?: unknown;
  ts?: unknown;
};

// Parses the client-sent attribution JSON defensively (it is user-controlled)
// and renders it as rows for the internal lead email. Keep the gclid: it is
// what you upload to Google Ads later as an offline conversion when this
// lead becomes a signed course.
function attributionRows(raw: string | undefined): string {
  if (!raw || raw.length > 5000) return "";
  let parsed: { first_touch?: Touch | null; last_touch?: Touch | null };
  try {
    parsed = JSON.parse(raw);
  } catch {
    return "";
  }

  const str = (v: unknown) => (typeof v === "string" ? v.slice(0, 300) : "");
  const row = (label: string, value: string) =>
    value
      ? `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`
      : "";

  const renderTouch = (label: string, t: Touch | null | undefined) => {
    if (!t || typeof t !== "object") return "";
    const p = (t.params && typeof t.params === "object" ? t.params : {}) as Record<string, unknown>;
    const when = typeof t.ts === "number" ? new Date(t.ts).toISOString() : "";
    const source = str(p.utm_source)
      ? `${str(p.utm_source)} / ${str(p.utm_medium) || "none"}`
      : str(p.gclid) || str(p.gbraid) || str(p.wbraid)
        ? "google / cpc"
        : str(t.referrer)
          ? "referral"
          : "direct";
    return [
      `<tr><td colspan="2" style="padding-top:12px"><strong>${label}</strong></td></tr>`,
      row("Source / Medium", source),
      row("Campaign", str(p.utm_campaign)),
      row("Term", str(p.utm_term)),
      row("Content", str(p.utm_content)),
      row("Landing page", str(t.landing_page)),
      row("Referrer", str(t.referrer)),
      row("gclid", str(p.gclid)),
      row("gbraid", str(p.gbraid)),
      row("wbraid", str(p.wbraid)),
      row("fbclid", str(p.fbclid)),
      row("msclkid", str(p.msclkid)),
      row("li_fat_id", str(p.li_fat_id)),
      row("First seen", when),
    ].join("");
  };

  return (
    renderTouch("First touch", parsed?.first_touch) +
    renderTouch("Last touch", parsed?.last_touch)
  );
}

const CALENDLY_DEMO_URL = "https://calendly.com/dominick-foreturniq/foreturn-iq-demo";

export async function submitDemoRequest(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name")?.toString().trim();
  const courseName = formData.get("courseName")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const attribution = attributionRows(formData.get("attribution")?.toString());

  if (!name || !courseName || !email) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const { error } = await resend.emails.send({
    from: "Foreturn IQ <dominick@foreturniq.com>",
    to: "dominick@foreturniq.com",
    subject: `Demo request from ${name} at ${courseName}`,
    html: `
      <h2>New Demo Request</h2>
      <table>
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Course / Club</strong></td><td>${courseName}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone || "Not provided"}</td></tr>
        ${attribution}
      </table>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }

  // Send the requester a link to book their demo on Calendly
  const firstName = name.split(" ")[0];
  const bookingUrl = `${CALENDLY_DEMO_URL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
  const { error: bookingError } = await resend.emails.send({
    from: "Foreturn IQ <dominick@foreturniq.com>",
    to: email,
    subject: `Book your Foreturn IQ demo, ${firstName}`,
    html: `
<div style="background-color:#f4f6f8;padding:40px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e8eaed;">
    <tr>
      <td style="padding:36px 40px 4px;text-align:center;">
        <img src="https://foreturniq.com/logo.png" width="132" alt="Foreturn IQ" style="display:block;margin:0 auto;width:132px;height:auto;border:0;">
      </td>
    </tr>
    <tr>
      <td style="padding:20px 40px 0;text-align:center;">
        <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#3AAA35;">Demo Request Confirmed</p>
        <h1 style="margin:0 0 16px;font-size:23px;line-height:1.35;color:#1B3068;font-weight:700;">Let's find a time, ${firstName}</h1>
        <p style="margin:0 0 28px;font-size:15px;line-height:1.6;color:#4b5563;">
          Thanks for your interest in Foreturn IQ for <strong style="color:#1B3068;">${courseName}</strong>. Pick a time below and we'll walk through how pre-ordering works for your course &mdash; menu setup, the kitchen queue, and getting your first tee times live.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 40px 8px;text-align:center;">
        <a href="${bookingUrl}" style="display:inline-block;background-color:#3AAA35;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 34px;border-radius:8px;">
          Book Your Demo &rarr;
        </a>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 40px 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #edf0f2;">
          <tr><td style="padding-top:20px;font-size:14px;color:#4b5563;vertical-align:top;width:18px;">&#9679;</td>
              <td style="padding-top:20px;font-size:14px;color:#4b5563;line-height:1.5;">Just 30 minutes, over Zoom</td></tr>
          <tr><td style="padding-top:8px;font-size:14px;color:#4b5563;vertical-align:top;width:18px;">&#9679;</td>
              <td style="padding-top:8px;font-size:14px;color:#4b5563;line-height:1.5;">We'll walk through your menu and a few real tee times</td></tr>
          <tr><td style="padding-top:8px;font-size:14px;color:#4b5563;vertical-align:top;width:18px;">&#9679;</td>
              <td style="padding-top:8px;font-size:14px;color:#4b5563;line-height:1.5;">No commitment required</td></tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:18px 40px;background-color:#f9fafb;text-align:center;border-top:1px solid #edf0f2;">
        <p style="margin:0 0 6px;font-size:12px;color:#9ca3af;">Button not working? Paste this into your browser:</p>
        <p style="margin:0;font-size:12px;word-break:break-all;"><a href="${bookingUrl}" style="color:#3AAA35;">${bookingUrl}</a></p>
      </td>
    </tr>
  </table>
  <p style="max-width:560px;margin:20px auto 0;text-align:center;font-size:12px;color:#9ca3af;">
    Foreturn IQ &middot; <a href="https://foreturniq.com" style="color:#9ca3af;">foreturniq.com</a>
  </p>
</div>
    `,
  });

  if (bookingError) {
    // The lead is already captured internally, so don't fail the form over this.
    console.error("Resend error (booking email):", bookingError);
  }

  return {
    success: true,
    message: "Thanks! Check your email for a link to book your demo.",
  };
}

// ─── Cheyenne Mountain trip scheduler ───────────────────────────────────────

export async function submitAvailability(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const datesJson = formData.get("dates")?.toString();
  const notes = formData.get("notes")?.toString().trim();

  if (!name || !email) {
    return { success: false, message: "Please enter your name and email." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  let dates: string[] = [];
  try {
    dates = JSON.parse(datesJson || "[]");
    if (!Array.isArray(dates)) throw new Error();
  } catch {
    return { success: false, message: "Something went wrong. Please try again." };
  }

  if (dates.length === 0) {
    return { success: false, message: "Please select at least one weekend." };
  }

  // dates are Saturday keys — format each as a Sat–Sun pair
  const formatWeekend = (satKey: string) => {
    const sat = new Date(satKey + "T00:00:00");
    const sun = new Date(satKey + "T00:00:00");
    sun.setDate(sun.getDate() + 1);
    const satStr = sat.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric" });
    const sunStr = sun.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric" });
    return `${satStr} – ${sunStr}`;
  };

  const byMonth: Record<string, string[]> = {};
  for (const satKey of dates) {
    const month = new Date(satKey + "T00:00:00").toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    if (!byMonth[month]) byMonth[month] = [];
    byMonth[month].push(formatWeekend(satKey));
  }

  const weekendsHtml = Object.entries(byMonth)
    .map(
      ([month, weekends]) =>
        `<p style="margin:12px 0 4px"><strong>${month}</strong></p><ul style="margin:0;padding-left:20px">${weekends.map((w) => `<li>${w}</li>`).join("")}</ul>`
    )
    .join("");

  const { error } = await resend.emails.send({
    from: "Cheyenne Trip <dominick@foreturniq.com>",
    to: "dominick.delbosque@gmail.com",
    subject: `${name} submitted availability — Cheyenne Mountain`,
    html: `<h2>${name} is free on ${dates.length} weekend${dates.length !== 1 ? "s" : ""}:</h2>${weekendsHtml}${notes ? `<p style="margin-top:16px"><strong>Notes:</strong> ${notes}</p>` : ""}<p style="margin-top:16px;color:#666">Reply to: <a href="mailto:${email}">${email}</a></p>`,
  });

  if (error) {
    console.error("Resend error (organizer):", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }

  // Confirmation to submitter
  await resend.emails.send({
    from: "Cheyenne Trip <dominick@foreturniq.com>",
    to: email,
    subject: "Your availability — Cheyenne Mountain trip",
    html: `<h2>Got it, ${name.split(" ")[0]}!</h2><p>You submitted ${dates.length} weekend${dates.length !== 1 ? "s" : ""}:</p>${weekendsHtml}${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ""}<p style="margin-top:24px;color:#888;font-size:13px">Need to update? Submit again at <a href="https://foreturniq.com/cheyenne">foreturniq.com/cheyenne</a>.</p>`,
  });

  return {
    success: true,
    message: `Thanks, ${name.split(" ")[0]}! Your weekends have been sent.`,
  };
}
