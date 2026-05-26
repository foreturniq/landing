"use server";

import { Resend } from "resend";

export type FormState = {
  success: boolean;
  message: string;
} | null;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitDemoRequest(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name")?.toString().trim();
  const courseName = formData.get("courseName")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();

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
      </table>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }

  return {
    success: true,
    message: "Thanks! We'll be in touch within 24 hours to schedule your demo.",
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
