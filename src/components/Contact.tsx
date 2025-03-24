import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Phone, Mail, Linkedin, Github, Globe, Send, ExternalLink, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formElement = formRef.current;
    const formData = new FormData(formElement);

    try {
      const response = await fetch('https://formspree.io/f/xeoakboq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      {/* Contact Information Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div>
          <p className="text-foreground/80 mb-6">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to connect or discuss potential projects.
          </p>
          <div className="space-y-4">
            {/* Email */}
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
            {/* LinkedIn */}
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
            {/* GitHub */}
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

        {/* Contact Form */}
        <form 
          ref={formRef} 
          className="space-y-6" 
          onSubmit={handleSubmit}
        >
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200"
              placeholder="Your name"
            />
          </div>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200"
              placeholder="Your email address"
            />
          </div>
          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200 resize-none"
              placeholder="Your message"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "inline-flex items-center justify-center h-12 px-6 font-medium bg
::contentReference[oaicite:0]{index=0}
 
