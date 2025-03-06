
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Rocket, CheckCircle, Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface FormData {
  name: string;
  email: string;
  phone: string;
  currentProject: string;
  goals: string;
  motivation: string;
  proudestAchievement: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  currentProject: '',
  goals: '',
  motivation: '',
  proudestAchievement: '',
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('applications')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          current_project: formData.currentProject,
          goals: formData.goals,
          motivation: formData.motivation,
          proudest_achievement: formData.proudestAchievement
        });
      
      if (error) {
        console.error('Error submitting application:', error);
        toast({
          title: "Feil ved innsending",
          description: "Det oppstod en feil. Vennligst prøv igjen senere.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      console.log('Application submitted successfully');
      toast({
        title: "Søknad mottatt",
        description: "Vi vil gjennomgå din søknad og ta kontakt snart.",
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error in submission:', error);
      toast({
        title: "Feil ved innsending",
        description: "Det oppstod en teknisk feil. Vennligst prøv igjen senere.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-glass rounded-xl p-8 md:p-12 w-full max-w-3xl mx-auto text-center">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Takk for din søknad</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Vi er glade for din interesse i vårt nettverk. Vi vil vurdere din søknad og kontakte deg innen kort tid for å la deg vite om du har blitt valgt til å delta.
        </p>
        <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
          <Lock className="w-4 h-4" />
          <span>Din informasjon behandles konfidensielt</span>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-glass rounded-xl p-6 md:p-10 w-full max-w-3xl mx-auto space-y-8 backdrop-blur-lg relative"
    >
      <div className="absolute -top-5 left-10 p-1 bg-background rounded-full">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/20 text-gold">
          <Rocket className="w-5 h-5" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold">Søk om medlemskap</h2>
        <p className="text-muted-foreground">
          Dette nettverket er søknadsbasert, fordi vi ønsker å samle de rette folka.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Fullt navn</Label>
            <Input
              id="name"
              name="name"
              placeholder="Ditt navn"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-post</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="din.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/50"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Telefonnummer</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+47 XXX XX XXX"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-background/50"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="currentProject">Hva jobber du med nå?</Label>
          <Textarea
            id="currentProject"
            name="currentProject"
            placeholder="Del kort om dine nåværende prosjekter, arbeid, eller studier."
            value={formData.currentProject}
            onChange={handleChange}
            required
            className="min-h-[100px] bg-background/50"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="goals">Dine mål for de neste 6-12 månedene</Label>
          <Textarea
            id="goals"
            name="goals"
            placeholder="Beskriv konkrete mål du jobber mot."
            value={formData.goals}
            onChange={handleChange}
            required
            className="min-h-[100px] bg-background/50"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="motivation">Hvorfor vil du bli med i dette nettverket?</Label>
          <Textarea
            id="motivation"
            name="motivation"
            placeholder="Fortell oss hvorfor du vil være en del av dette eksklusive nettverket og hva du kan bidra med."
            value={formData.motivation}
            onChange={handleChange}
            required
            className="min-h-[100px] bg-background/50"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="proudestAchievement">Hva er du mest stolt av å ha oppnådd?</Label>
          <Textarea
            id="proudestAchievement"
            name="proudestAchievement"
            placeholder="Del en prestasjon eller et mål du har nådd som du er spesielt stolt av."
            value={formData.proudestAchievement}
            onChange={handleChange}
            required
            className="min-h-[100px] bg-background/50"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <Button 
          type="submit" 
          className="w-full bg-gold hover:bg-gold/90 text-black text-lg py-6 relative overflow-hidden group"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sender inn..." : "Send søknad"}
          <div className="absolute inset-0 w-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gold-shimmer" />
        </Button>
        
        <p className="text-xs text-center text-muted-foreground">
          Ved å sende inn søknaden godtar du at vi kan kontakte deg via e-post eller telefon.
        </p>
      </div>
    </form>
  );
};

export default ApplicationForm;
