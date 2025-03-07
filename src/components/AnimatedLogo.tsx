
import React, { useEffect, useRef } from 'react';
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
        "relative flex items-center justify-center w-20 h-20",
        "transition-all duration-700 shadow-lg",
        className
      )}
    >
      <img 
        src="/lovable-uploads/b8e6a6fd-f5ac-407b-bcfb-63a3b584b463.png" 
        alt="Grunderklubben Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default AnimatedLogo;
