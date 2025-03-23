
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        {/* Colorful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-background"></div>
        
        {/* Dynamic colorful circles */}
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-pink-500/10 animate-float blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-purple-600/10 animate-float blur-3xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-blue-500/10 animate-float blur-3xl" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-24 text-center">
        <div ref={titleRef} className="reveal-effect">
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-balance">
            <span className="block relative">
              Avinash Yadav
              <Sparkles className="absolute -top-10 -right-10 text-yellow-400 animate-pulse h-8 w-8" />
            </span>
            <span className="block mt-2 md:mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </h1>
        </div>

        <div ref={subtitleRef} className="reveal-effect mt-6 md:mt-8">
          <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto text-balance">
            Specialized in building scalable, distributed systems with a focus on machine learning, data analytics, and cloud technologies.
          </p>
        </div>

        <div ref={ctaRef} className="reveal-effect mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-11 px-6 font-medium bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-md transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-11 px-6 font-medium bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-md transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-500/20"
          >
            Contact Me
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#experience" className="flex flex-col items-center justify-center text-sm text-foreground/70 hover:text-foreground transition-colors duration-300">
            <span className="mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background/60 to-transparent"></div>
    </section>
  );
};

export default Hero;
