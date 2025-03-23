
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Toggle 
      pressed={theme === 'dark'} 
      onPressedChange={toggleTheme}
      className={cn(
        "relative overflow-hidden h-10 w-10 rounded-full",
        "transition-colors duration-300"
      )}
      aria-label="Toggle theme"
    >
      <div className="relative z-10 flex items-center justify-center">
        {theme === 'dark' ? (
          <Moon className="h-5 w-5 text-yellow-300" />
        ) : (
          <Sun className="h-5 w-5 text-amber-500" />
        )}
      </div>
      <div className={cn(
        "absolute inset-0 transition-opacity duration-300",
        theme === 'dark' 
          ? "bg-slate-900 opacity-100" 
          : "bg-sky-100 opacity-100"
      )} />
      <div className={cn(
        "absolute -inset-px rounded-full transition-all duration-300 z-0",
        theme === 'dark'
          ? "border border-yellow-300/20 shadow-[0_0_10px_2px_rgba(250,204,21,0.3)]"
          : "border border-amber-500/20 shadow-[0_0_10px_2px_rgba(245,158,11,0.3)]"
      )} />
    </Toggle>
  );
};

export default ThemeToggle;
