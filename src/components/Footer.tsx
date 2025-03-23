
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 py-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-foreground/70 flex items-center">
              &copy; {currentYear} Avinash Yadav. Built with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/avinashyadav03"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              aria-label="GitHub"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <div className="relative bg-background rounded-full p-2 flex items-center justify-center">
                <Github className="h-5 w-5 text-foreground/60 group-hover:text-white transition-colors duration-300" />
              </div>
            </a>
            <a
              href="https://linkedin.com/in/avinashyadav03"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              aria-label="LinkedIn"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <div className="relative bg-background rounded-full p-2 flex items-center justify-center">
                <Linkedin className="h-5 w-5 text-foreground/60 group-hover:text-white transition-colors duration-300" />
              </div>
            </a>
            <a
              href="mailto:ar5840@srmist.edu.in"
              className="relative group"
              aria-label="Email"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <div className="relative bg-background rounded-full p-2 flex items-center justify-center">
                <Mail className="h-5 w-5 text-foreground/60 group-hover:text-white transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
