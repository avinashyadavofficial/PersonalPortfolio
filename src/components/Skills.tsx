
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number; // 1-10
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    skills: [
      { name: 'Java', level: 9 },
      { name: 'Python', level: 9 },
      { name: 'C/C++', level: 8 },
      { name: 'SQL', level: 8 }
    ]
  },
  {
    name: 'Cloud Technologies',
    skills: [
      { name: 'AWS EC2', level: 9 },
      { name: 'AWS S3', level: 8 },
      { name: 'AWS Lambda', level: 7 }
    ]
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MongoDB', level: 7 },
      { name: 'MySQL', level: 9 },
      { name: 'PostgreSQL', level: 7 },
      { name: 'Oracle SQL', level: 7 },
    ]
  },
  {
    name: 'Core CS Concepts',
    skills: [
      { name: 'Object-Oriented Design', level: 9 },
      { name: 'Algorithm Design', level: 9 },
      { name: 'Data Structures', level: 9 },
      { name: 'Complexity Analysis', level: 8 },
      { name: 'Distributed Systems', level: 7 },
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (index: number) => {
    if (currentTab !== index && !isAnimating) {
      setIsAnimating(true);
      setCurrentTab(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    categoryRefs.current.forEach((category) => {
      if (category) observer.observe(category);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="section-container">
      <div ref={sectionRef} className="reveal-effect mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Technical Skills</h2>
        <div className="mt-3 flex justify-center">
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <div className="flex overflow-x-auto no-scrollbar space-x-2 pb-4 mb-8">
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => handleTabChange(idx)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
                currentTab === idx
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="relative min-h-[300px]">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              ref={el => (categoryRefs.current[idx] = el)}
              className={cn(
                "absolute top-0 left-0 w-full transition-all duration-500 ease-in-out",
                currentTab === idx ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="p-4 rounded-lg bg-card border border-border">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{skill.name}</h4>
                      <span className="text-xs text-muted-foreground">
                        {Math.round((skill.level / 10) * 100)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out animate-progress origin-left"
                        style={{ 
                          width: `${(skill.level / 10) * 100}%`,
                          animationDelay: `${skillIdx * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Problem Solving</h3>
        <p className="text-foreground/80">
          Solved 500+ Data Structures & Algorithms problems, demonstrating strong analytical skills and a systematic approach to complex challenges.
        </p>
      </div>
    </section>
  );
};

export default Skills;
