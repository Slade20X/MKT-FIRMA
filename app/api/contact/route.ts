// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Walidacja
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Imię, email i wiadomość są wymagane' },
        { status: 400 }
      );
    }

    const from = process.env.RESEND_EMAIL_FROM || 'MKT Lab <noreply@mktlab.pl>';
    const to = process.env.CONTACT_EMAIL || 'mktlab.biuro@gmail.com';

    // Wysyłka do Ciebie
    const { data, error } = await resend.emails.send({
      from: from,
      to: [to],
      replyTo: email,
      subject: `📩 Nowa wiadomość: ${subject || 'Kontakt'}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #0F172A; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f8f8f8; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #0F172A; }
              .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📩 Nowa wiadomość z formularza MKT Lab</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Imię i nazwisko</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">📱 Telefon</div>
                  <div class="value">${phone || 'Nie podano'}</div>
                </div>
                <div class="field">
                  <div class="label">📝 Temat</div>
                  <div class="value">${subject || 'Brak tematu'}</div>
                </div>
                <div class="field">
                  <div class="label">💬 Wiadomość</div>
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>Wiadomość wysłana z formularza kontaktowego MKT Lab</p>
                <p>Odpowiedz na: <a href="mailto:${email}">${email}</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Wyślij potwierdzenie do klienta
    try {
      await resend.emails.send({
        from: from,
        to: [email],
        subject: '📧 Dziękujemy za kontakt z MKT Lab!',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #0F172A; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f8f8f8; padding: 30px; border-radius: 0 0 8px 8px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>📧 Dziękujemy za kontakt!</h2>
                </div>
                <div class="content">
                  <p>Cześć <strong>${name}</strong>! 👋</p>
                  <p>Dziękujemy za wiadomość. Odpowiemy na nią <strong>w ciągu 24h</strong>.</p>
                  <p>W międzyczasie zapraszamy do odwiedzenia naszych social mediów:</p>
                  <p>
                    <a href="https://www.facebook.com/profile.php?id=61590845034777">Facebook</a> | 
                    <a href="https://www.facebook.com/profile.php?id=61590845034777">Instagram</a>
                  </p>
                  <br>
                  <p>Pozdrawiamy,<br><strong>Zespół MKT Lab</strong></p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
    } catch (autoReplyError) {
      // Ignorujemy błąd auto-reply, ważne że wiadomość do Ciebie dotarła
      console.log('Auto-reply skipped (optional)');
    }

    return NextResponse.json(
      { success: true, message: 'Wiadomość wysłana!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Błąd wysyłki:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania' },
      { status: 500 }
    );
  }
}