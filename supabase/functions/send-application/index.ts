
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  currentProject: string;
  goals: string;
  motivation: string;
  proudestAchievement: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const applicationData: ApplicationData = await req.json();
    console.log("Received application data:", applicationData);

    // Format application data for email
    const emailHtml = `
      <h1>Ny søknad fra ${applicationData.name}</h1>
      <p><strong>E-post:</strong> ${applicationData.email}</p>
      <p><strong>Telefon:</strong> ${applicationData.phone}</p>
      <h2>Nåværende prosjekt:</h2>
      <p>${applicationData.currentProject}</p>
      <h2>Mål for de neste 6-12 månedene:</h2>
      <p>${applicationData.goals}</p>
      <h2>Motivasjon for å bli med:</h2>
      <p>${applicationData.motivation}</p>
      <h2>Stolteste prestasjon:</h2>
      <p>${applicationData.proudestAchievement}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "Grunderklubben <noreply@grunderklubben.com>",
      to: ["hallo@gkung.no"],
      subject: `Ny søknad fra ${applicationData.name}`,
      html: emailHtml,
      reply_to: applicationData.email
    });

    if (error) {
      console.error("Error sending email:", error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log("Email sent successfully:", data);

    return new Response(
      JSON.stringify({ success: true, message: "Application sent successfully" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in send-application function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "An error occurred while processing the application" 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
