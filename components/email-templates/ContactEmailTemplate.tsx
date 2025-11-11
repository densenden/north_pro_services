import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Heading,
} from '@react-email/components';

interface ContactEmailTemplateProps {
  name: string;
  firma?: string;
  email: string;
  anliegen: string;
  nachricht: string;
}

export const ContactEmailTemplate: React.FC<ContactEmailTemplateProps> = ({
  name,
  firma,
  email,
  anliegen,
  nachricht,
}) => {
  const anliegenLabels: { [key: string]: string } = {
    reinigung: 'Reinigungsanfrage',
    sicherheit: 'Sicherheitsdienst',
    hausmeister: 'Hausmeisterservice',
    app: 'NorthPatrol App',
    sonstiges: 'Sonstiges',
  };

  return (
    <Html>
      <Head>
        <style>{`
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #0B0E11;
            background-color: #F9FAFB;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #2F4D5C 0%, #758D9D 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            border-radius: 12px 12px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
          }
          .content {
            background: white;
            padding: 40px 30px;
            border-left: 1px solid #ECEFF1;
            border-right: 1px solid #ECEFF1;
          }
          .field {
            margin-bottom: 24px;
          }
          .field-label {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: #758D9D;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
          }
          .field-value {
            font-size: 16px;
            color: #0B0E11;
            font-weight: 500;
          }
          .message-box {
            background: #F9FAFB;
            border-left: 4px solid #2F4D5C;
            padding: 20px;
            border-radius: 8px;
            margin-top: 8px;
          }
          .message-box p {
            margin: 0;
            white-space: pre-wrap;
            line-height: 1.8;
          }
          .footer {
            background: #2F4D5C;
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 0 0 12px 12px;
            font-size: 14px;
          }
          .footer a {
            color: #758D9D;
            text-decoration: none;
          }
          .badge {
            display: inline-block;
            background: #758D9D;
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-top: 8px;
          }
          .divider {
            height: 1px;
            background: #ECEFF1;
            margin: 24px 0;
          }
        `}</style>
      </Head>
      <Body style={{ backgroundColor: '#F9FAFB', padding: '20px' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Section style={{
            background: 'linear-gradient(135deg, #2F4D5C 0%, #758D9D 100%)',
            color: 'white',
            padding: '40px 30px',
            textAlign: 'center',
            borderRadius: '12px 12px 0 0'
          }}>
            <Heading style={{ margin: 0, fontSize: '28px', fontWeight: 700 }}>
              📬 Neue Kontaktanfrage
            </Heading>
          </Section>

          <Section style={{
            background: 'white',
            padding: '40px 30px',
            borderLeft: '1px solid #ECEFF1',
            borderRight: '1px solid #ECEFF1'
          }}>
            <div style={{ marginBottom: '24px' }}>
              <Text style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: '#758D9D', letterSpacing: '0.5px', marginBottom: '6px' }}>
                Anliegen
              </Text>
              <div style={{
                display: 'inline-block',
                background: '#758D9D',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 600
              }}>
                {anliegenLabels[anliegen] || anliegen}
              </div>
            </div>

            <div style={{ height: '1px', background: '#ECEFF1', margin: '24px 0' }}></div>

            <div style={{ marginBottom: '24px' }}>
              <Text style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: '#758D9D', letterSpacing: '0.5px', marginBottom: '6px' }}>
                Name
              </Text>
              <Text style={{ fontSize: '16px', color: '#0B0E11', fontWeight: 500, margin: 0 }}>
                {name}
              </Text>
            </div>

            {firma && (
              <div style={{ marginBottom: '24px' }}>
                <Text style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: '#758D9D', letterSpacing: '0.5px', marginBottom: '6px' }}>
                  Firma
                </Text>
                <Text style={{ fontSize: '16px', color: '#0B0E11', fontWeight: 500, margin: 0 }}>
                  {firma}
                </Text>
              </div>
            )}

            <div style={{ marginBottom: '24px' }}>
              <Text style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: '#758D9D', letterSpacing: '0.5px', marginBottom: '6px' }}>
                E-Mail
              </Text>
              <Link href={`mailto:${email}`} style={{ fontSize: '16px', color: '#2F4D5C', textDecoration: 'none', fontWeight: 500 }}>
                {email}
              </Link>
            </div>

            <div style={{ height: '1px', background: '#ECEFF1', margin: '24px 0' }}></div>

            <div style={{ marginBottom: '24px' }}>
              <Text style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: '#758D9D', letterSpacing: '0.5px', marginBottom: '6px' }}>
                Nachricht
              </Text>
              <div style={{
                background: '#F9FAFB',
                borderLeft: '4px solid #2F4D5C',
                padding: '20px',
                borderRadius: '8px',
                marginTop: '8px'
              }}>
                <Text style={{ margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
                  {nachricht}
                </Text>
              </div>
            </div>
          </Section>

          <Section style={{
            background: '#2F4D5C',
            color: 'white',
            padding: '30px',
            textAlign: 'center',
            borderRadius: '0 0 12px 12px',
            fontSize: '14px'
          }}>
            <Text style={{ margin: '0 0 10px 0' }}>
              <strong>North Pro Services</strong>
            </Text>
            <Text style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#ECEFF1' }}>
              Himmelweiler 7/1, 89081 Ulm
            </Text>
            <Link href="mailto:info@northproservices.de" style={{ margin: 0, fontSize: '12px', color: '#758D9D', textDecoration: 'none' }}>
              info@northproservices.de
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
