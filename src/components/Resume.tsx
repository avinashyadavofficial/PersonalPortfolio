
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Download, FileText, ExternalLink } from 'lucide-react';

// Import your resume image
import resumeImage from '../assets/resume.png';

const Resume = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="resume" className="section-container bg-card/50">
      <div ref={sectionRef} className="reveal-effect mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Resume</h2>
        <div className="mt-3 flex justify-center">
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <div className="flex flex-col items-center space-y-8">
          <div className="bg-card shadow-lg rounded-lg border border-border overflow-hidden w-full">
            <div className="p-6 flex justify-between items-center border-b border-border">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Avinash Yadav - Resume</h3>
              </div>
              <div className="flex space-x-2">
                <a 
                  href="/lovable-uploads/a5122432-1d9d-4bd7-afa2-6ded3a46361a.png" 
                  download="Avinash_Yadav_Resume.png"
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </a>
                <a 
                  href="/lovable-uploads/a5122432-1d9d-4bd7-afa2-6ded3a46361a.png" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Size
                </a>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-background/50 rounded-lg p-4 overflow-hidden">
                <img 
                  src="/lovable-uploads/a5122432-1d9d-4bd7-afa2-6ded3a46361a.png" 
                  alt="Avinash Yadav Resume" 
                  className="w-full h-auto object-contain border border-border rounded shadow-sm hover:shadow-md transition-shadow"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
            <div className="bg-card border border-border rounded-lg p-5 w-full md:w-[calc(50%-0.5rem)]">
              <h4 className="text-lg font-semibold mb-3">Technical Skills</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Programming: Java, Python, C/C++, SQL</li>
                <li>Databases: MongoDB, MySQL, PostgreSQL, Oracle SQL</li>
                <li>Cloud: AWS EC2, Lambda, S3</li>
                <li>Core CS: Data Structures, Algorithms, OOD</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-5 w-full md:w-[calc(50%-0.5rem)]">
              <h4 className="text-lg font-semibold mb-3">Education</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>B.Tech in CSE (Software Engineering)</li>
                <li>CGPA: 9.66 (Half Financial aid)</li>
                <li>SRM Institute of Science and Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
