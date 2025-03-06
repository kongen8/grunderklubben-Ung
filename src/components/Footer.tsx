
import React from 'react';
import { Flame, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border/10 bg-gradient-to-b from-transparent to-background">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3">
              <Flame size={16} className="text-gold" />
            </div>
            <span className="font-playfair text-lg">Ambisiøse Nettverk</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Lock size={14} className="mr-2" />
            <span>Eksklusivt for ambisiøse unge</span>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alle rettigheter reservert</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">Vilkår</a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">Personvern</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
