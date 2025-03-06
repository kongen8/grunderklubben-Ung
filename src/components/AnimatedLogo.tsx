
import React, { useEffect, useRef } from 'react';
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const AnimatedLogo = ({ className }: { className?: string }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-float');
          } else {
            entry.target.classList.remove('animate-float');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (logoRef.current) {
      observer.observe(logoRef.current);
    }
    
    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={logoRef} 
      className={cn(
        "relative flex items-center justify-center w-12 h-12 rounded-full bg-primary",
        "transition-all duration-700 shadow-lg",
        className
      )}
    >
      <Flame 
        className="w-6 h-6 text-gold animate-pulse" 
        strokeWidth={1.5} 
      />
      <div className="absolute inset-0 bg-gold/20 rounded-full blur-sm"></div>
    </div>
  );
};

export default AnimatedLogo;
