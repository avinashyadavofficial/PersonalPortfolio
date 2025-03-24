import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Linkedin, Github, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

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
    if (formRef.current) observer.observe(formRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="section-container">
      <div ref={sectionRef} className="reveal-effect mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Get In Touch</h2>
        <div className="mt-3 flex justify-center">
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {/* Contact Info */}
        <div ref={contactInfoRef} className="reveal-effect">
          <div className="mb-8">
            <p className="text-foreground/80 mb-6">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to connect or discuss potential projects.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:ar5840@srmist.edu.in" className="font-medium hover:text-primary transition-colors">
                    ar5840@srmist.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/avinashyadav03" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors flex items-center"
                  >
                    linkedin.com/in/avinashyadav03
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a 
                    href="https://github.com/avinashyadavofficial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors flex items-center"
                  >
                    github.com/avinashyadavofficial
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form 
          ref={formRef} 
          className="reveal-effect space-y-6" 
          action="https://formspree.io/f/xeoakboq" 
          method="POST"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200 resize-none"
              placeholder="Your message"
            ></textarea>
          </div>

          {/* Optional: Redirect to thank-you page */}
          {/* <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" /> */}

          <button
            type="submit"
            className={cn(
              "inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-primary-foreground rounded-md transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg w-full"
            )}
          >
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
