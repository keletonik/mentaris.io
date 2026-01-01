import { Resend } from 'resend';

// Initialize Resend with API key
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.includes('placeholder')) {
    console.warn('Resend API key not configured. Emails will not be sent.');
    return null;
  }
  return new Resend(apiKey);
};

interface ContactEmailData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  try {
    const resend = getResendClient();
    
    // If Resend is not configured, skip email sending
    if (!resend) {
      console.log('Email skipped: Resend API key not configured');
      return { success: false, error: 'Email service not configured' };
    }
    
    const { name, email, company, service, message } = data;
    
    // Email to admin
    const adminEmail = await resend.emails.send({
      from: 'Mentaris Website <noreply@mentaris.io>',
      to: ['admin@mentaris.io'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #0066FF 0%, #00d4ff 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9; border-radius: 0 0 10px 10px;">
            <h2 style="color: #0066FF; margin-top: 0;">Contact Details</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #0066FF;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0066FF; text-decoration: none;">${email}</a></p>
              ${company ? `<p style="margin: 8px 0;"><strong>Company:</strong> ${company}</p>` : ''}
              ${service ? `<p style="margin: 8px 0;"><strong>Service Interested:</strong> ${service}</p>` : ''}
            </div>
            
            <h3 style="color: #0066FF; margin-top: 25px; margin-bottom: 10px;">Message</h3>
            <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff;">
              <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background-color: #e8f4ff; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #0066FF; font-size: 14px;">
                💼 Respond within 24 hours for best customer experience
              </p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 5px 0;">Mentaris AI Business Intelligence</p>
            <p style="margin: 5px 0;">Level 12, 123 Pitt Street, Sydney NSW 2000, Australia</p>
          </div>
        </div>
      `,
    });
    
    // Auto-reply email to customer
    const customerEmail = await resend.emails.send({
      from: 'Mentaris AI <noreply@mentaris.io>',
      to: [email],
      subject: 'Thank you for contacting Mentaris AI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #0066FF 0%, #00d4ff 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; color: #333; line-height: 1.6; margin-top: 0;">Hi ${name},</p>
            
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Thank you for contacting Mentaris AI Business Intelligence. We've received your message and our team will review it shortly.
            </p>
            
            <div style="background-color: #e8f4ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0066FF; margin: 25px 0;">
              <p style="margin: 0; color: #0066FF; font-weight: bold;">⏱️ Expected Response Time</p>
              <p style="margin: 10px 0 0 0; color: #333;">Our team typically responds within <strong>24 hours</strong> during business days.</p>
            </div>
            
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              In the meantime, feel free to explore our resources:
            </p>
            
            <div style="margin: 20px 0;">
              <a href="https://mentaris.io/resources" style="display: inline-block; background: linear-gradient(135deg, #0066FF 0%, #00d4ff 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px;">📚 Knowledge Centre</a>
              <a href="https://mentaris.io/blog" style="display: inline-block; background: linear-gradient(135deg, #00d4ff 0%, #0066FF 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px;">📝 Blog</a>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background-color: white; border-radius: 8px;">
              <h3 style="color: #0066FF; margin-top: 0;">Your Submission Summary</h3>
              <p style="margin: 8px 0; color: #666;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0; color: #666;"><strong>Email:</strong> ${email}</p>
              ${company ? `<p style="margin: 8px 0; color: #666;"><strong>Company:</strong> ${company}</p>` : ''}
              ${service ? `<p style="margin: 8px 0; color: #666;"><strong>Service Interested:</strong> ${service}</p>` : ''}
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 5px 0;"><strong>Mentaris AI Business Intelligence</strong></p>
            <p style="margin: 5px 0;">Level 12, 123 Pitt Street, Sydney NSW 2000, Australia</p>
            <p style="margin: 5px 0;">📧 admin@mentaris.io</p>
            <p style="margin: 15px 0 5px 0;">
              <a href="https://mentaris.io" style="color: #0066FF; text-decoration: none; margin: 0 10px;">Website</a> |
              <a href="https://mentaris.io/about" style="color: #0066FF; text-decoration: none; margin: 0 10px;">About Us</a> |
              <a href="https://mentaris.io/services" style="color: #0066FF; text-decoration: none; margin: 0 10px;">Services</a>
            </p>
          </div>
        </div>
      `,
    });
    
    return { 
      success: true, 
      adminEmailId: adminEmail.data?.id,
      customerEmailId: customerEmail.data?.id
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
}
