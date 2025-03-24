
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface StatItem {
  value: number;
  label: string;
}

const stats: StatItem[] = [
  { value: 500, label: 'Problems Solved' },
  { value: 15, label: 'Projects' },
  { value: 200, label: 'Mentored Interns' },
  { value: 3, label: 'Internship Experiences' }
];

const StatsCounter = () => {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const animateValue = (start: number, end: number, duration: number, index: number) => {
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);
      
      setCounters(prev => {
        const newCounters = [...prev];
        newCounters[index] = currentValue;
        return newCounters;
      });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            stats.forEach((stat, index) => {
              // Stagger the animations
              setTimeout(() => {
                animateValue(0, stat.value, 2000, index);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 mb-2">
                {counters[index]}
              </span>
              <span className="text-sm md:text-base text-white/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
