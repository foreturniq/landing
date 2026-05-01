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
    from: "Foreturn IQ <onboarding@resend.dev>",
    to: "dominick@foreturniq.com",
    subject: `Demo request from ${name} — ${courseName}`,
    html: `
      <h2>New Demo Request</h2>
      <table>
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Course / Club</strong></td><td>${courseName}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
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
