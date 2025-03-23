
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, ExternalLink, Github, CalendarIcon } from 'lucide-react';

interface ProjectType {
  title: string;
  date: string;
  description: string[];
  technologies: string[];
  link?: string;
  github?: string;
}

const projects: ProjectType[] = [
  {
    title: "HR Data Analytics",
    date: "Ongoing",
    description: [
      "Built Predictive Models for Employee Engagement: Developed machine learning models (Python, Pandas, Scikit-learn) to analyze HR datasets, achieving 85% accuracy in predicting attrition trends.",
      "Designed Scalable Query Systems & Dashboards: Built interactive Power BI dashboards and optimized data queries for real-time insights into key HR metrics."
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Power BI", "SQL"]
  },
  {
    title: "Rent-a-Read",
    date: "Dec 2024",
    description: [
      "Developed a Scalable Online eBook Rental Platform: Engineered a Python-MySQL-based platform with a PAY-PER-USE model, reducing operational costs by 30%.",
      "Optimized System Performance: Implemented caching, indexing strategies, and efficient database queries, supporting 1,000+ users with low-latency transactions."
    ],
    technologies: ["Python", "MySQL", "Caching", "RESTful API", "Payment Gateway Integration"]
  },
  {
    title: "Autocomplete Engine with Typo Tolerance",
    date: "Oct 2024",
    description: [
      "Designed a High-Performance Autocomplete System: Used Trie data structures and Levenshtein Distance to achieve 95% accuracy in typo-tolerant query suggestions.",
      "Enhanced System Efficiency: Leveraged Spark Java for distributed processing, reducing query latency by 40% and improving throughput."
    ],
    technologies: ["Java", "Spark", "Trie Data Structure", "Levenshtein Distance", "Distributed Systems"]
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleProjectHover = (index: number) => {
    setActiveProject(index);
  };

  const handleProjectLeave = () => {
    setActiveProject(null);
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
    
    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="section-container bg-secondary/30">
      <div ref={sectionRef} className="reveal-effect mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Featured Projects</h2>
        <div className="mt-3 flex justify-center">
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={el => (projectRefs.current[idx] = el)}
            className={cn(
              "reveal-effect group relative flex flex-col rounded-lg overflow-hidden transition-all duration-500 ease-out border border-border bg-card/80 hover:border-primary/30",
              activeProject === idx ? "scale-[1.02] shadow-xl z-10" : "scale-100 shadow-md",
              "hover:shadow-xl"
            )}
            onMouseEnter={() => handleProjectHover(idx)}
            onMouseLeave={handleProjectLeave}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                  <span>{project.date}</span>
                </div>
              </div>

              <div className="mb-6 flex-1">
                <ul className="list-disc list-inside space-y-2">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-sm text-card-foreground/90 leading-relaxed">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      <span>View Code</span>
                    </a>
                  ) : (
                    <span></span>
                  )}
                  
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>Get Details</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
