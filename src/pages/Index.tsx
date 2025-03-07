
import React, { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';
import { ChevronDown, Target, Rocket, Users, Book, Waves, Heart, Brain } from "lucide-react";
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
      className="opacity-0 flex flex-col items-start p-5 sm:p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm"
    >
      <div className="p-2.5 sm:p-3 mb-3 sm:mb-4 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
    </div>
  );
};

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Hero />
      
      <section className="relative py-16 sm:py-24 px-4">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          <div className="space-y-3 sm:space-y-4 text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-xs sm:text-sm font-medium text-primary border border-primary/20">
              Hvorfor bli med?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Et eksklusivt fellesskap for ambisiøse individer
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Vi skaper et miljø hvor likesinnede kan inspirere hverandre, dele erfaringer, og sammen nå nye høyder.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <FeatureItem
              icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="Sterkt Nettverk"
              description="Knytt kontakter med andre ambisiøse, målbevisste mennesker som kan åpne dører og skape muligheter."
            />
            <FeatureItem
              icon={<Target className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="Konkrete Resultater"
              description="Bli inspirert og få konkrete råd fra andre som faktisk handler og oppnår resultater."
            />
            <FeatureItem
              icon={<Rocket className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="Eksklusiv Tilgang"
              description="Få tilgang til vår private Discord-kanal og mulighet til å delta på en intensiv samling i Spania."
            />
          </div>
        </div>
      </section>
      
      <section className="relative py-16 sm:py-24 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4 text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-xs sm:text-sm font-medium text-primary border border-primary/20">
              Hvem søker vi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Verdier vi ser etter i våre medlemmer
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Vi tror på å samle mennesker som deler visse kjerneverdier for å skape et fruktbart fellesskap.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <FeatureItem
              icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="Samarbeidsånd"
              description="Vi ser etter mennesker som forstår verdien av å løfte hverandre opp, dele kunnskap, og skape synergier sammen."
            />
            <FeatureItem
              icon={<Heart className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="Sunn Livsstil"
              description="Medlemmer som prioriterer både mental og fysisk helse, og forstår at en balansert livsstil er nøkkelen til langsiktig suksess."
            />
            <FeatureItem
              icon={<Waves className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="Jevnlig Trening"
              description="Vi verdsetter personer som inkluderer fysisk aktivitet i sin rutine og forstår forbindelsen mellom en sunn kropp og et skarpt sinn."
            />
            <FeatureItem
              icon={<Brain className="w-5 h-5 sm:w-6 sm:h-6" />}
              title="Kontinuerlig Læring"
              description="Medlemmer som er dedikert til livslang læring, nysgjerrighet og personlig vekst gjennom nye erfaringer og kunnskap."
            />
          </div>
        </div>
      </section>
      
      <section id="application-form" className="relative py-16 sm:py-20 px-4 mb-12 sm:mb-16">
        <div className="relative z-10 max-w-5xl mx-auto space-y-8 sm:space-y-10">
          <div className="space-y-3 sm:space-y-4 text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-xs sm:text-sm font-medium text-primary border border-primary/20">
              Begrenset Antall Plasser
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Er du klar til å bygge noe stort?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
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
