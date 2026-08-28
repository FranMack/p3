export function mailTemplate({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nueva consulta</title>
    </head>
    <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">

      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:32px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.08);">

              <!-- Header -->
              <tr>
                <td style="background-color:#9B2020; padding:32px 40px;">
                  <p style="margin:0; color:#ffffff; font-size:13px; letter-spacing:2px; text-transform:uppercase;">Nueva consulta</p>
                  <h1 style="margin:8px 0 0; color:#ffffff; font-size:24px; font-weight:700;">Mensaje de contacto</h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:36px 40px;">

                  <!-- Datos del contacto -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                    <tr>
                      <td style="padding-bottom:16px;">
                        <p style="margin:0 0 4px; font-size:11px; color:#9B2020; text-transform:uppercase; letter-spacing:1px; font-weight:700;">Nombre</p>
                        <p style="margin:0; font-size:15px; color:#1A1A1A;">${name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom:16px; border-top:1px solid #f0f0f0; padding-top:16px;">
                        <p style="margin:0 0 4px; font-size:11px; color:#9B2020; text-transform:uppercase; letter-spacing:1px; font-weight:700;">Email</p>
                        <p style="margin:0; font-size:15px; color:#1A1A1A;">
                          <a href="mailto:${email}" style="color:#9B2020; text-decoration:none;">${email}</a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom:16px; border-top:1px solid #f0f0f0; padding-top:16px;">
                        <p style="margin:0 0 4px; font-size:11px; color:#9B2020; text-transform:uppercase; letter-spacing:1px; font-weight:700;">Teléfono</p>
                        <p style="margin:0; font-size:15px; color:#1A1A1A;">${phone ?? "No proporcionado"}</p>
                      </td>
                    </tr>
                  </table>

                  <!-- Mensaje -->
                  <div style="background-color:#f9f9f9; border-left:4px solid #9B2020; border-radius:4px; padding:20px 24px;">
                    <p style="margin:0 0 8px; font-size:11px; color:#9B2020; text-transform:uppercase; letter-spacing:1px; font-weight:700;">Mensaje</p>
                    <p style="margin:0; font-size:15px; color:#3D3D3D; line-height:1.7;">${message}</p>
                  </div>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color:#3D3D3D; padding:20px 40px; text-align:center;">
                  <p style="margin:0; color:#aaaaaa; font-size:12px;">Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>

    </body>
    </html>
  `;
}