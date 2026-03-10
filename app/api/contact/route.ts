import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, budget } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Manoutech <hello@manoutech.com>",
      to: siteConfig.links.email,
      subject: `Nouveau lead Manoutech - ${name}`,
      replyTo: email,
      text: `Nom: ${name}\nEmail: ${email}\nBudget: ${budget ?? "Non précisé"}\nMessage:\n${message}`,
    });

    return NextResponse.json({ status: "sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}
