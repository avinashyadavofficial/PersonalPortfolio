
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
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
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background/0 to-background/0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-24 text-center">
        <div ref={titleRef} className="reveal-effect">
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-balance">
            <span className="block">Avinash Yadav</span>
            <span className="block mt-2 md:mt-4 text-gradient">Software Engineer</span>
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
            className="inline-flex items-center justify-center h-11 px-6 font-medium bg-primary text-primary-foreground rounded-md transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-11 px-6 font-medium bg-secondary text-secondary-foreground rounded-md transition-all duration-300 ease-in-out transform hover:translate-y-[-2px]"
          >
            Contact Me
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
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
