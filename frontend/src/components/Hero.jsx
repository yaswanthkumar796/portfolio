import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import profileImg from '../assets/profileImg.jpeg';

const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(prev => prev.substring(0, prev.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-background pointer-events-none overflow-hidden">
        {/* Environment-aware gradient tint */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--hero-grad-start), var(--hero-grad-mid), var(--hero-grad-end))' }}></div>
        {/* Environment-aware dot grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(79,70,229,var(--dot-grid-opacity)) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Subtle static glows */}
        <div 
          className="absolute -top-[10%] -left-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full opacity-[0.05] dark:opacity-[0.1] blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.5), transparent 70%)' }}
        />
        <div 
          className="absolute bottom-[0%] -right-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full opacity-[0.03] dark:opacity-[0.1] blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.5), transparent 70%)' }}
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[calc(100vh-80px)]">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
          <div className="inline-block mb-8 px-5 py-2 rounded-full border border-accent-indigo/20 bg-accent-indigo/5 backdrop-blur-md text-sm font-medium tracking-wide">
              <span className="text-gradient">Available for new opportunities</span>
          </div>

          <div className="mb-4 relative z-20">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-extrabold tracking-tighter leading-tight mb-2">
                <span className="text-[var(--text-primary)] transition-colors duration-300">Yaswanth Kumar</span>
              </h1>
              
              <div className="h-10 md:h-14 mt-5 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-indigo via-accent-blue to-accent-cyan">Backend & Full Stack Developer</span>
                </h2>
              </div>
              
              <p className="text-lg md:text-xl font-medium tracking-wide max-w-2xl lg:mx-0 mx-auto text-[var(--text-secondary)] transition-colors duration-300">
                I build scalable backend systems and real-world applications.
              </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-12">
              {/* Primary Button */}
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}} className="group relative px-8 py-3.5 bg-gradient-to-r from-accent-indigo to-accent-cyan text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto shadow-lg hover:shadow-xl">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                      View Projects
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
              </a>
              {/* Secondary Button */}
              <a href="/my_cv.pdf" download="Yaswanth_Kumar_CV.pdf" target="_blank" rel="noopener noreferrer" 
                className="px-8 py-3.5 font-bold rounded-full transition-all duration-300 w-full sm:w-auto group relative overflow-hidden flex items-center justify-center gap-2 hover:scale-105"
                style={{
                  backgroundColor: 'var(--bg-button)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                }}
              >
                  <Download size={18} />
                  Download CV
              </a>
              {/* Tertiary Button */}
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}}
                className="px-8 py-3.5 font-bold rounded-full transition-all duration-300 w-full sm:w-auto group border hover:bg-surface"
                style={{
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)'
                }}
              >
                  Contact Me
              </a>
          </div>
        </div>

        {/* Profile Image Column */}
        <div className="flex-1 flex justify-center lg:justify-end items-center relative">
            <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent-indigo via-accent-purple to-accent-cyan rounded-full opacity-20 blur-2xl"></div>
                
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-gradient-to-tr from-accent-indigo via-accent-blue to-accent-cyan shadow-2xl z-20">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background border-4 border-background p-1">
                        <img 
                          src={profileImg} 
                          alt="Yaswanth Kumar" 
                          className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>

                <div className="absolute -top-6 -right-6 p-4 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-30">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-xs font-bold text-[var(--text-primary)] tracking-widest uppercase">Live Now</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
          <div className="flex items-center gap-3 mb-3">
                <span className="text-xs tracking-[0.3em] uppercase font-medium text-slate-400 group-hover:text-accent-indigo transition-colors duration-300">
                    Scroll
                </span>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-accent-indigo transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path>
                </svg>
          </div>
      </div>
    </section>
  );
}
