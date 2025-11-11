import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactEmailTemplate } from '@/components/email-templates/ContactEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, firma, email, anliegen, nachricht } = body;

    // Validate required fields
    if (!name || !email || !anliegen || !nachricht) {
      return NextResponse.json(
        { error: 'Alle Pflichtfelder müssen ausgefüllt sein' },
        { status: 400 }
      );
    }

    // Render email template to HTML
    const emailHtml = await render(
      <ContactEmailTemplate
        name={name}
        firma={firma}
        email={email}
        anliegen={anliegen}
        nachricht={nachricht}
      />
    );

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'North Pro Services <kontakt@sen.studio>',
      to: ['info@northproservices.de'],
      replyTo: email,
      subject: `Neue Kontaktanfrage: ${anliegen}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden der E-Mail' },
      { status: 500 }
    );
  }
}
