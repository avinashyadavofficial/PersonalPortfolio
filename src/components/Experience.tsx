
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
  position?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Samsung Prism',
    title: 'Research Intern',
    date: 'Sep 2023 - Dec 2023',
    position: 'Technical Internship',
    description: [
      'Improved Sales Chatbot Accuracy by 25%: Developed a chatbot using GPT-3, LLaMA2, and Gemini, fine-tuning LLMs with prompt engineering and Retrieval-Augmented Generation (RAG) via LangChain. Deployed on AWS (EC2, S3, Lambda), ensuring fault tolerance and scalability, increasing response accuracy by 25%.',
      'Developed Scalable and Fault-Tolerant Solutions: Built distributed computing solutions on AWS using EC2, Lambda, and S3, improving performance and reliability for large-scale applications.',
      'Optimized Relational Databases: Integrated Python with MySQL, implementing indexing and query optimization techniques, reducing query execution time by 20%.'
    ]
  },
  {
    company: 'MyEquation',
    title: 'Team Head',
    date: 'Jan 2022 - Nov 2022',
    description: [
      'Increased revenue by 40% through strategic partnerships and sponsorships.',
      'Managed and mentored over 200 interns, improving team efficiency by 30%.',
      'Received Letter of Recommendation from the CMO.'
    ]
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
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
    
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="section-container">
      <div ref={sectionRef} className="reveal-effect mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Professional Experience
        </h2>
        <div className="mt-3 flex justify-center">
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
      </div>

      <div className="relative mt-16">
        <div className="timeline-line"></div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              ref={el => (itemRefs.current[idx] = el)}
              className={cn(
                "reveal-effect flex flex-col md:flex-row items-start relative",
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              )}
            >
              <div className="timeline-dot" style={{ top: '24px' }}></div>
              
              <div className={cn(
                "w-full md:w-1/2 pb-8 md:pb-0",
                idx % 2 === 0 ? "md:pr-12" : "md:pl-12 md:text-right"
              )}>
                <div className="flex items-center text-sm text-primary mb-1">
                  <CalendarIcon className={cn("h-4 w-4 mr-1", idx % 2 === 1 ? "md:order-2 md:ml-1 md:mr-0" : "")} />
                  <span>{exp.date}</span>
                </div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-lg font-medium">{exp.company}</p>
                {exp.position && (
                  <p className="text-sm text-muted-foreground mt-1">{exp.position}</p>
                )}
              </div>
              
              <div className={cn(
                "w-full md:w-1/2",
                idx % 2 === 0 ? "md:pl-12" : "md:pr-12"
              )}>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <ul className="list-disc list-inside space-y-3 text-card-foreground/90">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
