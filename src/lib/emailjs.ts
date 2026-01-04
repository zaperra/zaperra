import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Get these values from https://www.emailjs.com/
// 1. Create account & email service (Gmail, Outlook, etc.)
// 2. Create an email template with variables: {{to_email}}, {{to_name}}
// 3. Get your Public Key from Account > API Keys

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',      // e.g., 'service_xxxxx'
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',    // e.g., 'template_xxxxx'  
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',      // e.g., 'xxxxxxxxxxxxx'
};

interface EmailParams {
  to_email: string;
  to_name?: string;
}

export const sendConfirmationEmail = async (params: EmailParams): Promise<boolean> => {
  // Skip if not configured
  if (
    EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
    EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
    EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
  ) {
    console.warn('EmailJS not configured. Skipping confirmation email.');
    return false;
  }

  try {
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        to_email: params.to_email,
        to_name: params.to_name || 'Early Supporter',
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    console.log('Confirmation email sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    return false;
  }
};
