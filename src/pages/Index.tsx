
import React, { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';
import { ChevronDown, Target, Rocket, Users, BookOpen, Dumbbell, Salad, Moon } from "lucide-react";
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

const PersonaItem = ({ icon, title, description }: { 
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
      className="opacity-0 flex flex-col items-center p-6 rounded-lg border border-gold/30 bg-card/20 backdrop-blur-sm text-center"
    >
      <div className="p-3 mb-4 rounded-full bg-gold/10 text-gold">
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
      
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-gold/10 text-sm font-medium text-gold border border-gold/20">
              Eksklusive Medlemmer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              "Du blir som de du er med" i full action!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vi leter etter mennesker med spesifikke kvaliteter for å bygge en helt vill snøball-effekt av vekst. 
              Dette er ikke for alle — vi er selektive for å skape et miljø som løfter hverandre.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PersonaItem
              icon={<Users className="w-6 h-6" />}
              title="Teamspillere"
              description="De som forstår verdien av samarbeid og løfter andre opp sammen med seg selv."
            />
            <PersonaItem
              icon={<Salad className="w-6 h-6" />}
              title="Helsebevisste"
              description="De som prioriterer sunn livsstil og forstår koblingen mellom fysisk helse og suksess."
            />
            <PersonaItem
              icon={<Dumbbell className="w-6 h-6" />}
              title="Disiplinerte"
              description="De som trener regelmessig og overfører samme disiplin til andre områder av livet."
            />
            <PersonaItem
              icon={<Moon className="w-6 h-6" />}
              title="Balanserte"
              description="De som prioriterer god søvn og restitusjon som en nøkkel til langsiktig suksess."
            />
            <PersonaItem
              icon={<BookOpen className="w-6 h-6" />}
              title="Livslange Lærere"
              description="De som konstant utvider sin kunnskap gjennom lesing og læring."
            />
            <PersonaItem
              icon={<Target className="w-6 h-6" />}
              title="Målrettede"
              description="De som setter tydelige mål og jobber systematisk for å nå dem."
            />
            <PersonaItem
              icon={<Rocket className="w-6 h-6" />}
              title="Ambisiøse"
              description="De som aldri er tilfreds med middelmådighet og alltid strekker seg etter mer."
            />
            <PersonaItem
              icon={<Flame className="w-6 h-6" />}
              title="Lidenskapelige"
              description="De som brenner for det de gjør og sprer denne energien til andre."
            />
          </div>
          
          <div className="text-center pt-8">
            <p className="text-xl font-medium text-gold">
              Dette er ikke for alle — og det er poenget.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Vi er selektive fordi vi tror på kraften i et fellesskap av likesinnede individer som drar hverandre oppover.
            </p>
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
              Er du en av dem vi leter etter?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dette nettverket er søknadsbasert for å sikre at vi samler de rette menneskene som virkelig vil lykkes sammen.
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
