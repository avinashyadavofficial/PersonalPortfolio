
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { CalendarIcon, GraduationCap } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  grade?: string;
  financial?: string;
}

const educationHistory: EducationItem[] = [
  {
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech - Computer Science And Engineering with Specialization in Software Engineering',
    date: 'Sep 2021 - May 2025',
    grade: 'CGPA: 9.66',
    financial: 'Half Financial aid'
  },
  {
    institution: 'VidyaGyan School',
    degree: 'Grade 12',
    date: 'Apr 2020 - Apr 2021',
    grade: 'Percentage: 94.2',
    financial: 'Full Financial aid'
  },
  {
    institution: 'VidyaGyan School',
    degree: 'Grade 10',
    date: 'Apr 2018 - Apr 2019',
    grade: 'Percentage: 97',
    financial: 'Full Financial aid'
  }
];

const achievements = [
  'Shiv Nadar Foundation Scholarship (Full Financial Aid for Grades 6-12)',
  '50% College Scholarship (MGT Socio-Economic Scholarship)',
  '98.88% Percentile in Naukri Campus Young Turks, India\'s Largest Skill Contest'
];

const certifications = [
  'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional'
];

const coursework = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Distributed Systems',
  'Algorithm Design',
  'Complexity Analysis'
];

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const courseworkRef = useRef<HTMLDivElement>(null);

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
    
    educationRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    if (achievementsRef.current) observer.observe(achievementsRef.current);
    if (certificationsRef.current) observer.observe(certificationsRef.current);
    if (courseworkRef.current) observer.observe(courseworkRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="education" className="section-container bg-secondary/30">
      <div ref={sectionRef} className="reveal-effect mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Education</h2>
        <div className="mt-3 flex justify-center">
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <GraduationCap className="h-5 w-5 mr-2 text-primary" />
            <span>Academic Background</span>
          </h3>
          
          <div className="space-y-8">
            {educationHistory.map((item, idx) => (
              <div 
                key={idx}
                ref={el => (educationRefs.current[idx] = el)}
                className="reveal-effect bg-card rounded-lg border border-border p-6 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center text-sm text-primary mb-2">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                <h4 className="text-lg font-medium">{item.institution}</h4>
                <p className="text-sm text-foreground/80 mt-1">{item.degree}</p>
                <div className="flex flex-col sm:flex-row sm:items-center mt-3 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                  {item.grade && (
                    <span className="text-muted-foreground">{item.grade}</span>
                  )}
                  {item.financial && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {item.financial}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div ref={achievementsRef} className="reveal-effect">
            <h3 className="text-xl font-semibold mb-6">Achievements</h3>
            <ul className="space-y-3">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium">{idx + 1}</span>
                  </div>
                  <span className="ml-3 text-foreground/90">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={certificationsRef} className="reveal-effect">
            <h3 className="text-xl font-semibold mb-6">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((certification, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="ml-3 text-foreground/90">{certification}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={courseworkRef} className="reveal-effect">
            <h3 className="text-xl font-semibold mb-6">Relevant Coursework</h3>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
