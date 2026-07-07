import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Award, ShieldCheck, CheckCircle2, FileText, Code2, Database, Layout, X, Maximize2 } from 'lucide-react';

import certBitsBytes from '../certificate/Coursera bitsbytes306.pdf';
import certCXN from '../certificate/Coursera CXNJK31PS7DI.pdf';
import certDDT from '../certificate/Coursera DDTGWP6ZLQ46.pdf';
import certDigital from '../certificate/Coursera digital.pdf';
import certInfosys1 from '../certificate/infosys certificate1.pdf';
import certInfosys2 from '../certificate/infosys certificate2.pdf';
import certInfosys3 from '../certificate/infosys certificate3.pdf';

const certifications = [
  {
    id: 1,
    title: "Bits & Bytes of Computer Networking",
    issuer: "Coursera / Google",
    path: certBitsBytes,
    gradient: "from-cyan-500/10 to-blue-500/10",
    borderHover: "group-hover:border-cyan-500/50",
    glowColor: "bg-cyan-500/50",
    icon: <ShieldCheck size={36} className="text-cyan-400" />,
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    title: "Network Services",
    issuer: "Coursera / Google",
    path: certCXN,
    gradient: "from-purple-500/10 to-pink-500/10",
    borderHover: "group-hover:border-purple-500/50",
    glowColor: "bg-purple-500/50",
    icon: <Award size={36} className="text-purple-400" />,
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    title: "System Administration",
    issuer: "Coursera / Google",
    path: certDDT,
    gradient: "from-emerald-500/10 to-green-500/10",
    borderHover: "group-hover:border-emerald-500/50",
    glowColor: "bg-emerald-500/50",
    icon: <CheckCircle2 size={36} className="text-emerald-400" />,
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    title: "Digital Marketing",
    issuer: "Coursera",
    path: certDigital,
    gradient: "from-orange-500/10 to-amber-500/10",
    borderHover: "group-hover:border-orange-500/50",
    glowColor: "bg-orange-500/50",
    icon: <Layout size={36} className="text-orange-400" />,
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 5,
    title: "Programming Fundamentals",
    issuer: "Infosys",
    path: certInfosys1,
    gradient: "from-indigo-500/10 to-violet-500/10",
    borderHover: "group-hover:border-indigo-500/50",
    glowColor: "bg-indigo-500/50",
    icon: <Code2 size={36} className="text-indigo-400" />,
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 6,
    title: "Data Structures",
    issuer: "Infosys",
    path: certInfosys2,
    gradient: "from-rose-500/10 to-red-500/10",
    borderHover: "group-hover:border-rose-500/50",
    glowColor: "bg-rose-500/50",
    icon: <Database size={36} className="text-rose-400" />,
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 7,
    title: "Database Management",
    issuer: "Infosys",
    path: certInfosys3,
    gradient: "from-teal-500/10 to-cyan-500/10",
    borderHover: "group-hover:border-teal-500/50",
    glowColor: "bg-teal-500/50",
    icon: <FileText size={36} className="text-teal-400" />,
    span: "md:col-span-2 md:row-span-1"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Lock body scroll when lightbox is open
  if (typeof window !== 'undefined') {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent-purple/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Certifications</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            A collection of professional achievements and continuous learning milestones.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[220px] gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={cardVariants} className={cert.span}>
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                scale={1.02}
                transitionSpeed={2000}
                className="w-full h-full"
              >
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className={`
                    group relative w-full h-full rounded-3xl overflow-hidden cursor-pointer
                    border border-white/5 bg-surface/40 backdrop-blur-xl
                    transition-all duration-500 ${cert.borderHover}
                    hover:shadow-2xl overflow-hidden flex flex-col p-8
                  `}
                >
                  {/* Aura Glow */}
                  <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 ${cert.glowColor}`} />
                  
                  {/* Premium Grad Mesh Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-50`} />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex justify-between items-start">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                        {cert.icon}
                      </div>
                      <div className="p-2 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors">
                        <Maximize2 size={20} className="text-[var(--text-muted)] group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                        {cert.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] font-medium tracking-wide uppercase text-xs flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-primary" />
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[85vh] md:h-[90vh] bg-surface rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-3 bg-black/50 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 border-b border-white/10 bg-black/20 flex items-center gap-4">
                {selectedCert.icon}
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{selectedCert.title}</h3>
                  <p className="text-accent-blue/80 text-sm font-medium">{selectedCert.issuer}</p>
                </div>
              </div>

              <div className="flex-1 w-full bg-[#323639]">
                <iframe 
                  src={`${selectedCert.path}#toolbar=0`}
                  title={selectedCert.title}
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
