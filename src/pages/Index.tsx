
import React, { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';
import { ChevronDown, Target, Rocket, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const FeatureItem = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={itemRef} 
      className="opacity-0 flex flex-col items-start p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm"
    >
      <div className="p-3 mb-4 rounded-lg bg-gold/10 text-gold">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Hero />
      
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-gold/10 text-sm font-medium text-gold border border-gold/20">
              Hvorfor bli med?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Et eksklusivt fellesskap for ambisiøse individer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vi skaper et miljø hvor likesinnede kan inspirere hverandre, dele erfaringer, og sammen nå nye høyder.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureItem
              icon={<Users className="w-6 h-6" />}
              title="Sterkt Nettverk"
              description="Knytt kontakter med andre ambisiøse, målbevisste mennesker som kan åpne dører og skape muligheter."
            />
            <FeatureItem
              icon={<Target className="w-6 h-6" />}
              title="Konkrete Resultater"
              description="Bli inspirert og få konkrete råd fra andre som faktisk handler og oppnår resultater."
            />
            <FeatureItem
              icon={<Rocket className="w-6 h-6" />}
              title="Eksklusiv Tilgang"
              description="Få tilgang til vår private Discord-kanal og mulighet til å delta på en intensiv samling i Spania."
            />
          </div>
        </div>
      </section>
      
      <section id="application-form" className="relative py-20 px-4 mb-16">
        <div className="relative z-10 max-w-5xl mx-auto space-y-10">
          <div className="space-y-4 text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-gold/10 text-sm font-medium text-gold border border-gold/20">
              Begrenset Antall Plasser
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Er du klar til å bygge noe stort?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dette nettverket er søknadsbasert for å sikre at vi samler de rette menneskene som virkelig vil noe.
            </p>
          </div>
          
          <ApplicationForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
