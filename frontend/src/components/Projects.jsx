import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Search, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const projects = [
  {
    id: 0,
    title: "Nexus IDE",
    description: "A professional mentorship tool categorized by user roles, showcasing exactly how 'Mentors' and 'Learners' interact in a high-performance collaborative workspace.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop",
    tags: ["React.js", "Node.js", "Docker", "Socket.io", "LiveKit"],
    category: "Web Dev",
    github: "https://github.com/yaswanthkumar796/Code-Collab-IDE---A-real-time-collaborative-coding-workspace", 
    live: "",
    span: "col-span-1 md:col-span-2 row-span-2",
    tech: ["React", "Vite", "Tailwind CSS", "Monaco Editor", "Socket.io", "LiveKit", "Node.js", "Express", "MongoDB", "Docker"],
    caseStudy: {
      problemTitle: "🎓 The Mentor’s Command Center",
      problem: [
        "Presentation Mode: Force all participants to sync with your active file and current line.",
        "Gather Users: Instantly pull every student to your specific cursor position.",
        "Admission Queue & Room Locking: Manage privacy by approving join requests or locking the session.",
        "Member Management: Full administrative power to mute, kick, or transfer host privileges."
      ],
      approachTitle: "💻 The Integrated Developer Experience",
      approach: [
        "Isolated Docker Execution: Safe, sandboxed execution for C++, Python, Java, and Node.js.",
        "Multi-User Synchronization: Zero-conflict editing with Live Cursors and Typing Indicators.",
        "Workspace Tools: A full File Explorer and GitHub Import to pull in existing repositories.",
        "Auto-Persistence: All code, chat logs, and room settings are saved to MongoDB."
      ],
      architectureTitle: "🛠️ The Technical Blueprint",
      architecture: [
        "Frontend: React, Vite, Tailwind CSS, Monaco Editor",
        "Real-time: Socket.io (State), LiveKit (Media)",
        "Backend: Node.js, Express",
        "Database: MongoDB (Mongoose)",
        "Runtime: Docker (Isolated Containers)"
      ],
      challengesTitle: "🎙️ Seamless Communication",
      challenges: [
        "Face-to-Face Mentoring: Integrated low-latency video and audio sharing.",
        "Interactive Engagement: A Raise Hand notification system for asking questions.",
        "Persistence-Backed Chat: A dedicated sidebar for technical discussions that stays saved."
      ],
      impactTitle: "Impact & Flexibility",
      impact: "A high-performance workspace that mimics a local environment, removing the need for external tools."
    }
  },
  {
    id: 1,
    title: "Daily Habit Tracker",
    description: "A productivity-focused web application to systematically record daily activities and visualize long-term consistency trends.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    tags: ["React.js", "Context API", "Firebase"],
    category: "Web Dev",
    github: "https://github.com/yaswanthkumar796/Daily-Habit-Tracker",
    live: "https://daily-habit-tracker-e9980.web.app/login",
    span: "col-span-1 md:col-span-2 row-span-2",
    tech: ["React.js", "Firebase Auth", "Firestore DB", "Framer Motion", "Tailwind CSS"],
    caseStudy: {
      problem: "People struggle to maintain consistency without visual feedback and accountability mechanisms.",
      approach: "Built a reactive frontend with centralized state management and real-time cloud database synchronization.",
      architecture: "React Context API manages global state, connected to Firebase Auth for session management and Firestore to sync daily completion data in real-time.",
      challenges: ["Synchronizing offline states with cloud database", "Optimizing React re-renders on large calendar grids"],
      impact: "Provided a seamless, zero-latency habit logging experience with secure authentication."
    }
  },
  {
    id: 2,
    title: "Sansad Adarsh Gramin",
    description: "Village development transparency portal replicating a government scheme. Features OAuth 2.0 and Google Drive integration.",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=800&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "OAuth 2.0"],
    category: "Web Dev",
    github: "https://github.com/yaswanthkumar796/FULL-project",
    live: "",
    span: "col-span-1 row-span-2",
    tech: ["PHP 8", "MySQL", "Google OAuth 2.0", "Google Drive API", "Bootstrap"],
    caseStudy: {
      problem: "Lack of transparency and digital record-keeping in rural village development projects.",
      approach: "Developed a full-stack portal with secure authentication and structured relational data storage.",
      architecture: "Client → PHP Backend → Google OAuth for secure login → MySQL for complaint/status tracking. Files synced to Google Drive.",
      challenges: ["Implementing secure OAuth 2.0 flow natively in PHP", "Designing relational DB for complex village hierarchy"],
      impact: "Digitized workflow replacing manual paper registers, improving accountability."
    }
  },
  {
    id: 3,
    title: "Bounce Master",
    description: "Interactive arcade game featuring multi-ball physics, collision detection, and dynamic score tracking.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    tags: ["Java", "Swing", "AWT", "OOP"],
    category: "Software & Games",
    github: "https://github.com/yaswanthkumar796/PongGame",
    live: "",
    span: "col-span-1 md:col-span-3 row-span-2",
    tech: ["Java SE", "Swing UI", "AWT Rendering", "Custom Physics Engine", "Multithreading"],
    caseStudy: {
      problem: "Needed to demonstrate mastery of core Java, OOP principles, and multithreading.",
      approach: "Built a completely custom game engine from scratch using standard Java libraries without external game frameworks.",
      architecture: "Event-driven architecture. Main game loop runs on a dedicated thread, updating entity positions and resolving collisions before repainting via AWT.",
      challenges: ["Jittery rendering fixed with Double Buffering", "Complex collision math for dynamic ball bouncing"],
      impact: "A performant, zero-dependency Java application showcasing deep language understanding."
    }
  },

  {
    id: 5,
    title: "Wellness Platform",
    description: "A comprehensive mental health and wellness platform connecting users with therapists, featuring session booking, community forums, and real-time notifications.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    tags: ["Spring Boot", "React.js", "MySQL"],
    category: "Web Dev",
    github: "https://github.com/Srihitha2006-git/wellness-backend",
    live: "",
    span: "col-span-1 row-span-2",
    tech: ["Spring Boot", "React.js", "MySQL", "Spring Security", "JWT", "JPA/Hibernate", "REST API"],
    caseStudy: {
      problem: "Mental health services lack accessible digital platforms for session booking, practitioner discovery, and peer support communities.",
      approach: "Developed a full-stack application with a Spring Boot backend providing secure REST APIs and a React frontend with role-based dashboards for users, practitioners, and admins.",
      architecture: "Spring Boot backend with JPA/Hibernate connects to PostgreSQL. Spring Security with JWT handles authentication and role-based authorization. React frontend with Context API manages state.",
      challenges: ["Implementing role-based access control across user, practitioner, and admin roles", "Building a real-time notification system for session reminders and forum activity"],
      impact: "Created a holistic wellness ecosystem with therapy sessions, community forums, mood tracking, and practitioner management."
    }
  }
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <div onClick={onClick} className={`glass-panel group cursor-pointer overflow-hidden ${project.span} flex flex-col h-full min-h-[300px] border border-border bg-surface/50 dark:bg-black/20 hover:border-accent-primary/50 transition-colors duration-500`}>
      <motion.div layoutId={`card-${project.title}`} className="absolute inset-0 z-0 bg-[#0a0a0f]">
        <motion.img layoutId={`image-${project.title}`} src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover opacity-30 dark:opacity-40 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050508] via-white/80 dark:via-[#050508]/80 to-transparent dark:to-transparent"></div>
      </motion.div>

      <div className="relative z-10 p-8 flex flex-col h-full justify-end pointer-events-none">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/5 backdrop-blur-md text-[var(--text-secondary)] group-hover:border-accent-blue/50 group-hover:text-[var(--text-primary)] transition-all duration-500">
              {tag}
            </span>
          ))}
        </div>
        <motion.h3 layoutId={`title-${project.title}`} className="text-2xl font-black mb-2 tracking-wide text-[var(--text-primary)] group-hover:text-accent-blue transition-colors duration-300 pointer-events-auto w-fit">
          {project.title}
        </motion.h3>
        <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-6 group-hover:text-[var(--text-primary)] transition-colors pointer-events-auto">
          {project.description}
        </p>
        <div className="flex items-center gap-4 mt-auto pointer-events-auto">
          {project.github && project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-3 rounded-full bg-surface dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 border border-border hover:border-accent-primary/50 transition-colors backdrop-blur-md text-[var(--text-primary)] shadow-lg">
              <Github size={20} />
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-3 rounded-full bg-surface dark:bg-white/10 hover:bg-accent-primary border border-border dark:border-white/5 transition-colors backdrop-blur-md text-[var(--text-primary)] hover:text-white shadow-lg">
              <ExternalLink size={20} />
            </a>
          )}
          <span className="ml-auto text-sm text-accent-blue font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
            View Case Study <ArrowRight size={16} />
          </span>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-accent-blue/30 transition-all duration-700"></div>
    </div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "All" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
            <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
                    Featured <span className="text-gradient">Case Studies</span>
                </h2>
                <p className="text-[var(--text-secondary)] text-lg">
                    Real-world projects showcasing backend architecture, problem-solving, and full-stack integration.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                  <input 
                    type="text" 
                    placeholder="Search tech stack..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface border border-border rounded-full pl-10 pr-4 py-2.5 text-sm text-[var(--text-primary)] focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                  />
                </div>
                
                <div className="glass-panel p-1.5 flex rounded-full w-full sm:w-auto overflow-x-auto hide-scrollbar border-border bg-surface">
                    {["All", "Web Dev", "Software & Games"].map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`relative px-5 py-2.5 whitespace-nowrap rounded-full text-sm font-semibold transition-colors duration-300 ${filter === category ? "text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`}
                        >
                            {filter === category && (
                                <motion.div layoutId="activeTabIndicator" className="absolute inset-0 bg-white dark:bg-accent-primary/20 border border-gray-200 dark:border-accent-primary/50 shadow-sm dark:shadow-[0_0_15px_rgba(99,102,241,0.5)] rounded-full -z-10" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                            )}
                            <span className="relative z-10">{category}</span>
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        transition={{ duration: 0.4 }}
                        className={project.span}
                    >
                        <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
          {selectedProject && (
              <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
      </AnimatePresence>
    </section>
  );
}
