import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { X, ExternalLink, Github, Target, Lightbulb, Server, ShieldAlert, BarChart3, Layout, Cpu } from 'lucide-react';
import BrowserFrame from './BrowserFrame';

const CaseStudySection = ({ title, icon, content, delay, variant = "default" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`glass-panel p-8 rounded-3xl border border-white/5 bg-surface dark:bg-[#0a0a14]/60 backdrop-blur-xl hover:border-accent-primary/50 transition-all duration-500 group shadow-2xl ${variant === 'compact' ? 'p-6' : 'p-8'}`}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-accent-primary/10 rounded-2xl text-accent-primary group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-accent-primary transition-colors">{title}</h3>
    </div>
    {Array.isArray(content) ? (
      <ul className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-base">
        {content.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">{content}</p>
    )}
  </motion.div>
);

export default function ProjectDetails({ project, onClose }) {
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-[#f8fafc] dark:bg-[#050508] overflow-y-auto overflow-x-hidden"
      ref={containerRef}
    >
      {/* Background Gradients */}
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-accent-primary/10 rounded-full blur-[150px] mix-blend-screen opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-accent-purple/10 rounded-full blur-[150px] mix-blend-screen opacity-30 pointer-events-none"></div>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        onClick={onClose}
        className="fixed top-6 right-6 z-[60] w-12 h-12 bg-white/50 dark:bg-white/10 backdrop-blur-xl rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-accent-primary/20 hover:scale-110 transition-all shadow-xl"
      >
        <X size={24} />
      </motion.button>

      {/* Hero Header */}
      <div className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.h1 layoutId={`title-${project.title}`} className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-blue to-accent-purple tracking-tight">
          {project.title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed">
          {project.description}
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        
        {/* Main Grid: Image Left, Top Sections Right (Image 2 Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
            
            {/* Left: Image with Browser Frame */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="sticky top-24"
            >
                <BrowserFrame>
                    <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" />
                </BrowserFrame>
            </motion.div>

            {/* Right: Feature Cards */}
            <div className="space-y-6">
                {project.caseStudy && (
                    <>
                        {project.caseStudy.problem && <CaseStudySection 
                            title={project.caseStudy.problemTitle || "Problem Statement"} 
                            icon={<Target />} 
                            content={project.caseStudy.problem} 
                            delay={0.1} 
                        />}
                        {project.caseStudy.approach && <CaseStudySection 
                            title={project.caseStudy.approachTitle || "The Approach"} 
                            icon={<Lightbulb />} 
                            content={project.caseStudy.approach} 
                            delay={0.2} 
                        />}
                    </>
                )}
                
                {/* Visual Flair Cards from reference image */}
                <div className="space-y-6">
                    {project.caseStudy?.architecture && <CaseStudySection 
                        title={project.caseStudy.architectureTitle || "Architecture"} 
                        icon={<Server />} 
                        content={project.caseStudy.architecture} 
                        delay={0.3}
                        variant="compact"
                    />}
                    {project.caseStudy?.challenges && (
                        <CaseStudySection 
                            title={project.caseStudy.challengesTitle || "Challenges & Solutions"} 
                            icon={<ShieldAlert />} 
                            content={project.caseStudy.challenges} 
                            delay={0.4} 
                            variant="compact"
                        />
                    )}
                    {project.caseStudy?.impact && (
                        <CaseStudySection 
                            title={project.caseStudy.impactTitle || "Impact & Results"} 
                            icon={<BarChart3 />} 
                            content={project.caseStudy.impact} 
                            delay={0.5} 
                            variant="compact"
                        />
                    )}
                </div>
            </div>
        </div>

        {/* Tech Stack & Links */}
        <div className="relative overflow-hidden p-10 rounded-[2.5rem] text-center border border-white/5 bg-[#050508]/60 backdrop-blur-2xl mt-12 mb-8 shadow-2xl pb-16">
           {/* 2. The Background Atmosphere */}
           {/* Mesh Gradients */}
           <motion.div 
             animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" 
           />
           <motion.div 
             animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }} 
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" 
           />
           {/* Noise Texture */}
           <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

           {/* 3. The "Neural" Connections */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 1000 500" preserveAspectRatio="none">
             <defs>
               <linearGradient id="neural-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="rgba(79, 70, 229, 0.1)" />
                 <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)">
                   <animate attributeName="stopColor" values="rgba(139, 92, 246, 0.2);rgba(56, 189, 248, 0.6);rgba(139, 92, 246, 0.2)" dur="4s" repeatCount="indefinite" />
                 </stop>
                 <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
               </linearGradient>
             </defs>
             <g stroke="url(#neural-grad)" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke">
               {/* Faint pulsing lines representing a constellation */}
               <path d="M0,250 Q200,50 500,250 T1000,250">
                 <animate attributeName="d" values="M0,250 Q200,50 500,250 T1000,250; M0,250 Q200,450 500,250 T1000,250; M0,250 Q200,50 500,250 T1000,250" dur="15s" repeatCount="indefinite" />
               </path>
               <path d="M0,400 Q300,500 500,300 T1000,400" opacity="0.6">
                 <animate attributeName="d" values="M0,400 Q300,500 500,300 T1000,400; M0,400 Q300,100 500,300 T1000,400; M0,400 Q300,500 500,300 T1000,400" dur="20s" repeatCount="indefinite" />
               </path>
               <path d="M0,100 L1000,400 M0,400 L1000,100 M500,0 L500,500 M250,0 L750,500 M750,0 L250,500" strokeDasharray="4 12" opacity="0.4">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="10s" repeatCount="indefinite" />
               </path>
             </g>
           </svg>

           <h3 className="relative z-10 text-3xl font-bold text-gray-900 dark:text-white mb-14 drop-shadow-md">Powering the Experience</h3>
           
           <div className="relative z-10 flex flex-wrap justify-center gap-6 sm:gap-10 mb-16 max-w-5xl mx-auto">
             {project.tech && project.tech.map((tech, index) => {
               // Assign tech-specific glow colors
               const techColors = {
                 'React': 'rgba(97, 218, 251, 0.8)',
                 'React.js': 'rgba(97, 218, 251, 0.8)',
                 'Node.js': 'rgba(104, 160, 99, 0.8)',
                 'MongoDB': 'rgba(71, 162, 72, 0.8)',
                 'Docker': 'rgba(36, 150, 237, 0.8)',
                 'Socket.io': 'rgba(255, 255, 255, 0.8)',
                 'LiveKit': 'rgba(240, 60, 60, 0.8)',
                 'Vite': 'rgba(100, 108, 255, 0.8)',
                 'Tailwind CSS': 'rgba(56, 189, 248, 0.8)',
                 'Express': 'rgba(255, 255, 255, 0.8)',
                 'Monaco Editor': 'rgba(0, 122, 204, 0.8)'
               };
               const baseColor = techColors[tech] || 'rgba(139, 92, 246, 0.8)';
               const glowColor = baseColor.replace('0.8', '0.4');
               const softGlowColor = baseColor.replace('0.8', '0.15');

               return (
               <motion.div
                 key={tech}
                 initial={{ opacity: 0, scale: 0.8, y: 20 }}
                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
                 whileHover={{ 
                   y: -5,
                   scale: 1.05,
                 }}
                 viewport={{ once: true }}
                 transition={{ 
                   type: "spring", stiffness: 300, damping: 20, delay: index * 0.05 
                 }}
                 // 1. The "Glassmorphic" Orb Style Container
                 className="flex flex-col items-center justify-center w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full relative group cursor-default"
               >
                 {/* Frosted Glass Orb Background */}
                 <div className="absolute inset-0 rounded-full bg-white/[0.03] dark:bg-[#0a0a14]/60 backdrop-blur-xl transition-all duration-500 group-hover:bg-white/[0.05] dark:group-hover:bg-[#0a0a14]/80 group-hover:shadow-xl"></div>
                 
                 {/* Gradient Border (1px) using pseudo-box-shadow technique */}
                 <div 
                    className="absolute inset-[1px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" 
                    style={{ 
                        boxShadow: `0 0 0 1px rgba(255,255,255,0.05), inset 0 0 10px ${softGlowColor}` 
                    }}
                 ></div>
                 
                 {/* The 1px Glowing Edge overlay */}
                 <div 
                    className="absolute inset-0 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, ${softGlowColor} 0%, transparent 50%, rgba(255,255,255,0.05) 100%)`, padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}
                 ></div>

                 {/* The Outer Glow that matches tech color */}
                 <div 
                    className="absolute inset-[-10px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl z-0" 
                    style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
                 ></div>

                 {/* Subtle persistent glow */}
                 <div 
                    className="absolute inset-0 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" 
                    style={{ boxShadow: `0 0 20px ${softGlowColor}` }}
                 ></div>

                 <span className="relative z-10 text-gray-700 dark:text-gray-300 text-xs sm:text-[15px] font-bold group-hover:text-white transition-colors text-center px-2 leading-tight">
                   {tech}
                 </span>
               </motion.div>
             )})}
           </div>
           
           <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-6 pt-10 mt-6 border-t border-white/5">
             {project.github && project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-10 py-4 bg-surface dark:bg-white/5 hover:bg-white/10 rounded-2xl text-gray-900 dark:text-white font-bold transition-all border border-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-md">
                  <Github size={22} /> View Source
                </a>
             )}
             {project.live && project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-accent-primary to-accent-blue hover:scale-[1.02] active:scale-95 rounded-2xl text-white font-bold transition-all shadow-xl shadow-accent-primary/20">
                  <ExternalLink size={22} /> Experience Live
                </a>
             )}
           </div>
        </div>
      </div>
    </motion.div>
  );
}
