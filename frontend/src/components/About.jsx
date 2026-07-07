import { Award, Code2, Heart, GraduationCap, Target, Star, Layout, Database, Box, FileText, AlertTriangle, ArrowRight, Brain, Cpu, Zap } from 'lucide-react';
import {
     SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

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

export default function About() {
     return (
          <section id="about" className="py-32 relative overflow-hidden">
               <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--text-primary)]">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <div className="h-[4px] w-[100px] bg-gradient-to-r from-accent-indigo via-accent-blue to-accent-cyan mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
                         <div className="lg:col-span-7">
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
                          </div>

                          <div className="lg:col-span-5">
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
                                     <div 
                                         key={i}
                                         className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group hover:border-accent-primary/20 transition-all duration-500"
                                     >
                                         <div className={`mb-4 p-4 rounded-xl ${item.color === 'white' ? 'bg-white/10 text-white' : `bg-${item.color}/10 text-${item.color}`} group-hover:scale-110 transition-transform duration-500`}>
                                             {item.icon}
                                         </div>
                                         <h4 className="text-sm font-bold text-[var(--text-primary)]">{item.title}</h4>
                                     </div>
                                 ))}
                             </div>
                          </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
                         <div>
                              <h3 className="text-2xl font-bold mb-12 flex items-center gap-3 text-[var(--text-primary)]">
                                   <Code2 className="text-accent-blue" /> Evolution Tracker
                              </h3>

                              <div className="relative pl-8 md:pl-0">
                                   <div className="absolute left-[15px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-white/5" />

                                   <div className="space-y-12">
                                        {timeline.map((item, index) => (
                                             <div
                                                  key={index}
                                                  className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
                                             >
                                                  <div className="absolute left-[-24px] md:left-1/2 md:-ml-[16px] w-8 h-8 rounded-full bg-background border-4 border-surface z-10 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                                                       <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                                                  </div>

                                                  <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                                                       <div className="glass-panel p-6 rounded-2xl group border border-white/5 hover:border-accent-primary/20 transition-colors duration-500">
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
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>

                         <div>
                              <h3 className="text-2xl font-bold mb-12 flex items-center gap-3 text-[var(--text-primary)]">
                                   <Award className="text-yellow-400" /> Training & Certifications
                              </h3>

                              <div className="space-y-4">
                                   {certifications.map((cert, index) => {
                                        if (cert.isDetailed) {
                                             return (
                                                  <div 
                                                       key={index}
                                                       className="glass-panel p-6 md:p-8 rounded-3xl border border-border bg-surface dark:bg-black/20 hover:border-accent-primary/20 transition-colors group mb-6"
                                                  >
                                                       <div className="flex justify-between items-start mb-6">
                                                            <div>
                                                                  <h4 className="text-2xl font-bold text-[var(--text-primary)]">{cert.title}</h4>
                                                                  <p className="text-accent-purple font-medium mt-1">{cert.subtitle}</p>
                                                            </div>
                                                            {cert.link && cert.link !== "PASTE_YOUR_DRIVE_LINK_HERE" ? (
                                                                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border bg-white dark:bg-white/5 hover:bg-accent-primary/10 hover:border-accent-primary hover:text-accent-primary transition-all text-[var(--text-secondary)] shadow-sm flex items-center justify-center">
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
                                                  </div>
                                             );
                                        }

                                        return (
                                             <a 
                                                  key={index}
                                                  href={cert.link !== "PASTE_YOUR_DRIVE_LINK_HERE" ? cert.link : null} 
                                                  target={cert.link !== "PASTE_YOUR_DRIVE_LINK_HERE" ? "_blank" : undefined} 
                                                  rel={cert.link !== "PASTE_YOUR_DRIVE_LINK_HERE" ? "noopener noreferrer" : undefined}
                                                  className={`flex items-center justify-between p-5 glass-panel rounded-2xl border border-border bg-surface dark:bg-black/20 hover:border-${cert.color === 'accent-primary' ? 'indigo' : cert.color}-500/20 transition-colors group ${cert.link === "PASTE_YOUR_DRIVE_LINK_HERE" ? 'cursor-not-allowed opacity-80' : ''}`}
                                             >
                                                  <div className="flex items-center gap-4">
                                                       <div className={`p-3 bg-${cert.color === 'accent-primary' ? 'indigo' : cert.color}-500/10 rounded-xl text-${cert.color === 'accent-primary' ? 'indigo' : cert.color}-500`}>
                                                            {cert.icon}
                                                       </div>
                                                       <div>
                                                            <h4 className={`font-bold text-[var(--text-primary)] group-hover:text-${cert.color === 'accent-primary' ? 'indigo' : cert.color}-500 transition-colors`}>{cert.title}</h4>
                                                            <p className="text-sm text-[var(--text-secondary)] mt-1">{cert.subtitle}</p>
                                                       </div>
                                                  </div>
                                                  <div className={`p-2.5 rounded-full border border-border bg-white dark:bg-white/5 group-hover:bg-${cert.color === 'accent-primary' ? 'indigo' : cert.color}-500/10 group-hover:border-${cert.color === 'accent-primary' ? 'indigo' : cert.color}-500 group-hover:text-${cert.color === 'accent-primary' ? 'indigo' : cert.color}-500 transition-all text-[var(--text-secondary)] shadow-sm flex items-center justify-center`}>
                                                       <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                                                  </div>
                                             </a>
                                        );
                                   })}
                              </div>

                              <a
                                   href="PASTE_YOUR_DRIVE_LINK_HERE" target="_blank" rel="noopener noreferrer"
                                   className="mt-8 block"
                              >
                                   <div className="glass-panel p-8 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent relative overflow-hidden group hover:border-orange-500/30 transition-colors">
                                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl transition-colors duration-700"></div>
                                        <div className="flex justify-between items-start relative z-10">
                                            <div className="w-full pr-12">
                                                 <div className="flex items-center gap-4 mb-4">
                                                      <div className="p-3 bg-orange-500/10 rounded-xl">
                                                            <Heart className="text-orange-500" size={24} />
                                                      </div>
                                                      <h4 className="text-xl font-bold text-[var(--text-primary)]">Beyond Code</h4>
                                                  </div>
                                                  <h5 className="font-bold text-[var(--text-primary)] mb-2 group-hover:text-orange-500 transition-colors">TOSS NGO Community Volunteer</h5>
                                                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                                       Dedicated time and effort towards community development and social welfare programs, reflecting a deep empathetic commitment outside the realm of technology.
                                                  </p>
                                             </div>
                                             <div className="p-2.5 rounded-full border border-border bg-white dark:bg-white/5 hover:bg-orange-500/10 hover:border-orange-500 hover:text-orange-500 transition-all text-[var(--text-secondary)] shadow-sm flex items-center justify-center shrink-0">
                                                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                                             </div>
                                        </div>
                                   </div>
                              </a>
                         </div>
                    </div>
               </div>
          </section>
     );
}
