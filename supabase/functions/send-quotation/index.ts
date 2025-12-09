import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuotationRequest {
  name: string;
  email: string;
  phone: string;
  productName: string;
  quantity: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received quotation request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, productName, quantity, message }: QuotationRequest = await req.json();

    console.log("Processing quotation for:", { name, email, productName });

    // Send email to business
    const businessEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Green Farmly <onboarding@resend.dev>",
        to: ["lekadhir@gmail.com"],
        subject: `New Quotation Request: ${productName}`,
        html: `
          <h1>New Quotation Request</h1>
          <h2>Customer Details</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <h2>Product Details</h2>
          <p><strong>Product:</strong> ${productName}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <h2>Message</h2>
          <p>${message || 'No additional message'}</p>
        `,
      }),
    });

    console.log("Business email sent:", await businessEmailResponse.json());

    // Send confirmation email to customer
    const customerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Green Farmly <onboarding@resend.dev>",
        to: [email],
        subject: "We received your quotation request!",
        html: `
          <h1>Thank you for your interest, ${name}!</h1>
          <p>We have received your quotation request for <strong>${productName}</strong>.</p>
          <p><strong>Quantity requested:</strong> ${quantity}</p>
          <p>Our team will review your request and get back to you within 24 hours.</p>
          <p>Best regards,<br>The Green Farmly Team</p>
        `,
      }),
    });

    console.log("Customer email sent:", await customerEmailResponse.json());

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-quotation function:", error);
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
