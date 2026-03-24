import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { Target, Award, Code2, Heart, GraduationCap, Briefcase, Zap, Star, Layout, Database, Box, FileText, AlertTriangle, ArrowRight, Brain, Cpu } from 'lucide-react';
import {
     SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import MagneticButton from './MagneticButton';

const skills = {
     languages: [
          { name: "Java", icon: <FaJava className="text-[#007396]" /> },
          { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
          { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
          { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> }
     ],
     frameworks: [
          { name: "Swing", icon: <Layout className="text-[#FF9800]" /> },
          { name: "AWT", icon: <Layout className="text-[#FF9800]" /> },
          { name: "JDBC", icon: <Database className="text-[#4CAF50]" /> }
     ],
     tools: [
          { name: "OOP", icon: <Box className="text-[#9C27B0]" /> },
          { name: "File I/O", icon: <FileText className="text-[#607D8B]" /> },
          { name: "Exception Handling", icon: <AlertTriangle className="text-[#F44336]" /> }
     ]
};

const timeline = [
     {
          title: "B.Tech in Computer Science",
          institution: "Lovely Professional University",
          date: "Aug 2023 - Present",
          description: "Pursuing bachelor's degree in CSE. Current CGPA: 8.41.",
          icon: <GraduationCap size={20} className="text-accent-primary" />
     },
     {
          title: "Intermediate (89%)",
          institution: "Ascent Junior College",
          date: "Jul 2021 - Apr 2023",
          description: "Completed higher secondary education in Mathematics, Physics, and Chemistry.",
          icon: <Target size={20} className="text-purple-400" />
     },
     {
          title: "Matriculation (99%)",
          institution: "Priyanka's Vidyodaya High School",
          date: "Jul 2020 - Jun 2021",
          description: "Completed primary secondary education, building core foundations.",
          icon: <Award size={20} className="text-green-400" />
     }
];

const certifications = [
     {
          title: "Full-Stack Training",
          subtitle: "Cipher Schools (Jun '25 - Jul '25)",
          link: "https://www.cipherschools.com/certificate/preview?id=6883b3caca64e035786b1f17", 
          icon: <Award className="text-accent-primary shrink-0 mt-0.5" size={18} />, 
          isDetailed: true,
          points: [
             "Mastered the MERN stack ecosystem, bridging the gap between front-end designs and server-side logic",
             "Applied React, React Router, Context API, and Firebase to solve real-world coding problems",
             "Finalized a production-ready habit tracking application as a complete capstone project"
          ],
          color: "accent-primary"
     },
     {
          title: "LeetCode Global Rank 3681",
          subtitle: "Among 27k+ participants in Weekly Contest 473",
          link: "https://leetcode.com/u/yaswanthkumarkillamseety2005/",
          icon: <Star size={24} />,
          color: "yellow"
     },
     {
          title: "Dean's Top 10% Students",
          subtitle: "For exceptional academic performance at LPU",
          icon: <Star size={24} />,
          color: "purple"
     },
     {
          title: "NPTEL Cloud Computing",
          subtitle: "Jan 2025 - Apr 2025",
          link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S153730323904257975.pdf", 
          icon: <Award size={24} />,
          color: "green"
     },
     {
          title: "Free Code Camp Web Dev",
          subtitle: "Completed in Dec 2023",
          link: "https://www.freecodecamp.org/certification/fcca51e2316-636a-445a-9f62-1634f68f73fe/responsive-web-design", 
          icon: <Star size={24} />,
          color: "orange"
     },
     {
          title: "Binary Blitz (Coding Ninjas)",
          subtitle: "Top 10% out of 800 participants",
          link: "https://drive.google.com/file/d/1st8MrtvMRzmXntADEkKni6Yo-UOqfv-1/view", 
          icon: <Zap size={24} />,
          color: "cyan"
     }
];

const SkillBadge = ({ tech }) => (
     <MagneticButton className="flex items-center justify-center gap-3 px-6 py-3 bg-surface border border-white/5 rounded-full cursor-pointer hover:border-accent-blue/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:text-white text-[var(--text-muted)] transition-all duration-300">
          <span className="text-xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
          <span className="font-semibold">{tech.name}</span>
     </MagneticButton>
);

export default function About() {
     const containerRef = useRef(null);
     const { scrollYProgress } = useScroll({
          target: containerRef,
          offset: ["start end", "end start"]
     });

     const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

     return (
          <section id="about" className="py-32 relative overflow-hidden" ref={containerRef}>
               <div className="container mx-auto px-6 relative z-10">
                    {/* Header: About Me centered with underline (Image 1 style) */}
                    <div className="text-center mb-24">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-bold mb-4 text-[var(--text-primary)]"
                        >
                            About <span className="text-gradient">Me</span>
                        </motion.h2>
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-[4px] bg-gradient-to-r from-accent-indigo via-accent-blue to-accent-cyan mx-auto rounded-full"
                        />
                    </div>

                    {/* Split Content: Text Left, Attributes Right (Image 1/2 Hybrid) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
                         {/* Left: Text Content */}
                         <motion.div
                               initial={{ opacity: 0, x: -50 }}
                               whileInView={{ opacity: 1, x: 0 }}
                               viewport={{ once: true }}
                               transition={{ duration: 0.8 }}
                               className="lg:col-span-7"
                          >
                               <div className="text-[var(--text-secondary)] text-lg md:text-xl font-medium leading-relaxed space-y-6">
                                    <p>
                                         I am a passionate <span className="text-[var(--text-primary)] font-bold border-b-2 border-accent-blue/30">Computer Science student</span> currently pursuing my <span className="text-accent-blue font-bold">BTech at Lovely Professional University</span>.
                                    </p>
                                    <p>
                                         My journey revolves around full stack development, solving algorithm-heavy problems, and architecting scalable backend systems. I strive to design applications that not only function beautifully under the hood but look stunning on the surface.
                                    </p>
                                    <p>
                                         Through rigorous coursework and hands-on projects, I have developed a robust foundation in <span className="text-accent-purple font-bold">Data Structures and Algorithms</span>, enabling me to write highly optimized, clean, and maintainable code for any environment.
                                    </p>
                               </div>
                          </motion.div>

                          <motion.div
                               initial={{ opacity: 0, x: 50 }}
                               whileInView={{ opacity: 1, x: 0 }}
                               viewport={{ once: true }}
                               transition={{ duration: 0.8 }}
                               className="lg:col-span-5"
                          >
                             <h3 className="text-[var(--text-muted)] text-xs font-bold tracking-[0.3em] uppercase mb-8 text-center lg:text-left">
                                 Core Attributes
                             </h3>
                             <div className="grid grid-cols-2 gap-4">
                                 {[
                                     { title: "Problem Solving", icon: <Brain size={28} />, color: "accent-purple" },
                                     { title: "System Design", icon: <Cpu size={28} />, color: "accent-blue" },
                                     { title: "Adaptability", icon: <Target size={28} />, color: "white" },
                                     { title: "Development", icon: <Code2 size={28} />, color: "accent-cyan" }
                                 ].map((item, i) => (
                                     <motion.div 
                                         key={i}
                                         initial={{ opacity: 0, y: 20 }}
                                         whileInView={{ opacity: 1, y: 0 }}
                                         viewport={{ once: true }}
                                         transition={{ delay: i * 0.1 }}
                                         className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group hover:border-accent-primary/50 transition-all duration-500"
                                     >
                                         <div className={`mb-4 p-4 rounded-xl ${item.color === 'white' ? 'bg-white/10 text-white' : `bg-${item.color}/10 text-${item.color}`} group-hover:scale-110 transition-transform duration-500`}>
                                             {item.icon}
                                         </div>
                                         <h4 className="text-sm font-bold text-[var(--text-primary)]">{item.title}</h4>
                                     </motion.div>
                                 ))}
                             </div>
                          </motion.div>
                    </div>

                    {/* 2. Evolution Tracker & 3. Trophy Room Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">

                         {/* Evolution Tracker (Timeline) */}
                         <div>
                              <h3 className="text-2xl font-bold mb-12 flex items-center gap-3 text-[var(--text-primary)]">
                                   <Code2 className="text-accent-blue" /> Evolution Tracker
                              </h3>

                              <div className="relative pl-8 md:pl-0">
                                   <div className="absolute left-[15px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-white/5">
                                        <motion.div
                                             className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-accent-primary via-accent-blue to-accent-purple transform origin-top shadow-[0_0_15px_rgba(99,102,241,0.8)]"
                                             style={{ scaleY: pathLength }}
                                        />
                                   </div>

                                   <div className="space-y-12">
                                        {timeline.map((item, index) => (
                                             <motion.div
                                                  key={index}
                                                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                                  whileInView={{ opacity: 1, x: 0 }}
                                                  viewport={{ once: true, margin: "-100px" }}
                                                  transition={{ duration: 0.6, type: "spring" }}
                                                  className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
                                             >
                                                  <div className="absolute left-[-24px] md:left-1/2 md:-ml-[16px] w-8 h-8 rounded-full bg-background border-4 border-surface z-10 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                                                       <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></div>
                                                  </div>

                                                  <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                                                       <div className="glass-panel p-6 rounded-2xl group hover:border-accent-primary/50 transition-colors duration-500">
                                                            <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                                                 {index % 2 !== 0 && item.icon}
                                                                 <h4 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-accent-primary transition-colors">{item.title}</h4>
                                                                 {index % 2 === 0 && item.icon}
                                                            </div>
                                                            <h5 className="text-accent-blue font-medium mb-1">{item.institution}</h5>
                                                            <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-[var(--text-secondary)] mb-4 border border-white/5">
                                                                 {item.date}
                                                            </span>
                                                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                                                 {item.description}
                                                            </p>
                                                       </div>
                                                  </div>
                                             </motion.div>
                                        ))}
                                   </div>
                              </div>
                         </div>

                         {/* Training & Certifications */}
                         <div>
                              <h3 className="text-2xl font-bold mb-12 flex items-center gap-3 text-[var(--text-primary)]">
                                   <Award className="text-yellow-400" /> Training & Certifications
                              </h3>

                              <div className="space-y-4">
                                   {certifications.map((cert, index) => {
                                        if (cert.isDetailed) {
                                             return (
                                                  <motion.div 
                                                       key={index}
                                                       initial={{ opacity: 0, y: 20 }}
                                                       whileInView={{ opacity: 1, y: 0 }}
                                                       viewport={{ once: true }}
                                                       className="glass-panel p-6 md:p-8 rounded-3xl border border-border bg-surface dark:bg-black/20 hover:border-accent-primary/50 transition-colors group mb-6"
                                                  >
                                                       <div className="flex justify-between items-start mb-6">
                                                            <div>
                                                                 <h4 className="text-2xl font-bold text-[var(--text-primary)]">{cert.title}</h4>
                                                                 <p className="text-accent-purple font-medium mt-1">{cert.subtitle}</p>
                                                            </div>
                                                            {cert.link && cert.link !== "PASTE_YOUR_DRIVE_LINK_HERE" ? (
                                                                 <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border bg-white dark:bg-white/5 group-hover:bg-accent-primary/10 group-hover:border-accent-primary group-hover:text-accent-primary transition-all text-[var(--text-secondary)] shadow-sm flex items-center justify-center">
                                                                      <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                                                                 </a>
                                                            ) : (
                                                                 <div className="p-3 rounded-full border border-border bg-white dark:bg-white/5 text-[var(--text-secondary)] shadow-sm flex items-center justify-center cursor-not-allowed" title="Certificate link not provided yet">
                                                                      <ArrowRight size={20} className="-rotate-45" />
                                                                 </div>
                                                            )}
                                                       </div>
                                                       <ul className="space-y-4">
                                                            {cert.points.map((point, i) => (
                                                                 <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                                                      <ArrowRight size={18} className="text-accent-primary shrink-0 mt-0.5" />
                                                                      <span>{point}</span>
                                                                 </li>
                                                            ))}
                                                       </ul>
                                                  </motion.div>
                                             );
                                        }

                                        return (
                                             <motion.a 
                                                  key={index}
                                                  href={cert.link !== "PASTE_YOUR_DRIVE_LINK_HERE" ? cert.link : null} 
                                                  target={cert.link !== "PASTE_YOUR_DRIVE_LINK_HERE" ? "_blank" : undefined} 
                                                  rel={cert.link !== "PASTE_YOUR_DRIVE_LINK_HERE" ? "noopener noreferrer" : undefined}
                                                  initial={{ opacity: 0, y: 20 }}
                                                  whileInView={{ opacity: 1, y: 0 }}
                                                  viewport={{ once: true }}
                                                  transition={{ delay: index * 0.1 }}
                                                  className={`flex items-center justify-between p-5 glass-panel rounded-2xl border border-border bg-surface dark:bg-black/20 hover:border-${cert.color}-500/50 transition-colors group ${cert.link === "PASTE_YOUR_DRIVE_LINK_HERE" ? 'cursor-not-allowed opacity-80' : ''}`}
                                             >
                                                  <div className="flex items-center gap-4">
                                                       <div className={`p-3 bg-${cert.color}-500/10 rounded-xl text-${cert.color}-500`}>
                                                            {cert.icon}
                                                       </div>
                                                       <div>
                                                            <h4 className={`font-bold text-[var(--text-primary)] group-hover:text-${cert.color}-500 transition-colors`}>{cert.title}</h4>
                                                            <p className="text-sm text-[var(--text-secondary)] mt-1">{cert.subtitle}</p>
                                                       </div>
                                                  </div>
                                                  <div className={`p-2.5 rounded-full border border-border bg-white dark:bg-white/5 group-hover:bg-${cert.color}-500/10 group-hover:border-${cert.color}-500 group-hover:text-${cert.color}-500 transition-all text-[var(--text-secondary)] shadow-sm flex items-center justify-center`}>
                                                       <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                                                  </div>
                                             </motion.a>
                                        );
                                   })}
                              </div>

                              {/* Beyond Code */}
                              <motion.a
                                   href="PASTE_YOUR_DRIVE_LINK_HERE" target="_blank" rel="noopener noreferrer"
                                   initial={{ opacity: 0, scale: 0.95 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   viewport={{ once: true, margin: "-50px" }}
                                   transition={{ duration: 0.8, delay: 0.4 }}
                                   className="mt-8 block"
                              >
                                   <div className="glass-panel p-8 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent relative overflow-hidden group hover:border-orange-500/40 transition-colors">
                                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700"></div>
                                        <div className="flex justify-between items-start relative z-10">
                                            <div className="w-full pr-12">
                                                 <div className="flex items-center gap-4 mb-4">
                                                      <div className="p-3 bg-orange-500/10 rounded-xl">
                                                           <Heart className="text-orange-500" size={24} />
                                                      </div>                                                       <h4 className="text-xl font-bold text-[var(--text-primary)]">Beyond Code</h4>
                                                  </div>
                                                  <h5 className="font-bold text-[var(--text-primary)] mb-2 group-hover:text-orange-500 transition-colors">TOSS NGO Community Volunteer</h5>
                                                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                                       Dedicated time and effort towards community development and social welfare programs, reflecting a deep empathetic commitment outside the realm of technology.
                                                  </p>
                                             </div>
                                             <div className="p-2.5 rounded-full border border-border bg-white dark:bg-white/5 group-hover:bg-orange-500/10 group-hover:border-orange-500 group-hover:text-orange-500 transition-all text-[var(--text-secondary)] shadow-sm flex items-center justify-center shrink-0">
                                                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                                            </div>
                                        </div>
                                   </div>
                              </motion.a>

                         </div>
                    </div>
               </div>
          </section>
     );
}
