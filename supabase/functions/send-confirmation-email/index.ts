
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  type: 'contact' | 'appointment';
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  appointmentDetails?: {
    date: string;
    time: string;
    subject: string;
    duration: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: ContactEmailRequest = await req.json();
    console.log("Received email request:", requestData);

    let subject: string;
    let htmlContent: string;

    if (requestData.type === 'contact') {
      subject = "Thank you for contacting Hill Scholars!";
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Thank you for contacting us, ${requestData.name}!</h1>
          <p>We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Message Details:</h3>
            <p><strong>Subject:</strong> ${requestData.subject || 'General Inquiry'}</p>
            <p><strong>Phone:</strong> ${requestData.phone || 'Not provided'}</p>
            <p><strong>Message:</strong><br>${requestData.message}</p>
          </div>
          
          <p>If you have any urgent questions, please don't hesitate to call us at (617) 819-5809.</p>
          
          <p style="color: #6b7280;">
            Best regards,<br>
            <strong>Hill Scholars SAT Tutoring</strong><br>
            Email: szhang@hillscholars.com<br>
            Phone: (617) 819-5809
          </p>
        </div>
      `;
    } else {
      subject = "Your SAT Tutoring Session is Confirmed!";
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Session Confirmed, ${requestData.name}!</h1>
          <p>Your SAT tutoring session has been successfully scheduled. We're excited to help you achieve your target score!</p>
          
          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <h3 style="color: #1d4ed8; margin-top: 0;">Session Details:</h3>
            <p><strong>Date:</strong> ${requestData.appointmentDetails?.date}</p>
            <p><strong>Time:</strong> ${requestData.appointmentDetails?.time}</p>
            <p><strong>Subject:</strong> ${requestData.appointmentDetails?.subject}</p>
            <p><strong>Duration:</strong> ${requestData.appointmentDetails?.duration}</p>
            <p><strong>Phone:</strong> ${requestData.phone}</p>
          </div>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
            <h3 style="color: #15803d; margin-top: 0;">What to Expect:</h3>
            <ul style="color: #374151;">
              <li>We'll contact you 15 minutes before your session</li>
              <li>Have your practice materials ready</li>
              <li>Prepare any specific questions you'd like to discuss</li>
              <li>We'll send you a Zoom link 24 hours before the session</li>
            </ul>
          </div>
          
          <p>If you need to reschedule or have any questions, please contact us at least 24 hours in advance.</p>
          
          <p style="color: #6b7280;">
            Best regards,<br>
            <strong>Hill Scholars SAT Tutoring</strong><br>
            Email: szhang@hillscholars.com<br>
            Phone: (617) 819-5809
          </p>
        </div>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Hill Scholars <szhang@hillscholars.com>",
      to: [requestData.email],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
