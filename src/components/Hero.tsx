
import React, { useEffect, useRef } from 'react';
import { Flame, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedLogo from './AnimatedLogo';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, observerOptions);
    
    if (headingRef.current) observer.observe(headingRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (scrollRef.current) observer.observe(scrollRef.current);
    
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (scrollRef.current) observer.unobserve(scrollRef.current);
    };
  }, []);
  
  const handleScrollDown = () => {
    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
      applicationForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-mesh-gradient">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/90 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16 md:py-32">
        <div className="mb-8 md:mb-12 flex justify-center">
          <AnimatedLogo className="mb-8" />
        </div>
        
        <div className="mb-6">
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-gold/10 text-sm font-medium text-gold border border-gold/20 tracking-wide">
            Eksklusivt Nettverk
          </span>
        </div>
        
        <h1 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter text-balance"
        >
          For de <span className="glow-gold text-gold">ambisiøse</span> som faktisk 
          <span className="block mt-2">gjør noe med målene sine</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance"
        >
          Et lukket nettverk for unge som vil mer. Vi pusher hverandre til nye høyder gjennom faste møter, deling av ideer, og ekte forbindelser.
        </p>
        
        <button 
          onClick={handleScrollDown}
          className="group inline-flex items-center gap-2 mt-8 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span>Søk om medlemskap</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
      
      <div 
        ref={scrollRef}
        className="absolute bottom-10 w-full flex justify-center animation-delay-1000"
      >
        <div 
          onClick={handleScrollDown}
          className="cursor-pointer w-10 h-16 rounded-full border-2 border-muted flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-gold rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
