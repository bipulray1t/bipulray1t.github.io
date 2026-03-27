import { motion } from 'motion/react';
import { Terminal, Code2, ExternalLink, Github, MessageSquare, Briefcase, User, Mail, Send, Smartphone, Globe, Key } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Scene3D from './Scene3D';
import HireMeModal from './HireMeModal';
import { cn } from '../lib/utils';
import All_projects from '../data/writeme.json';

const PROJECTS = [
  {
    id: '1',
    title: "AniStream",
    description: "A high-performance Animes and movies streaming platform, built with Node.js and React vite.",
    tags: ["React", "Node.js", "vite", "js"],
    link: "/demo/1",
    github: "#"
  },
  {
    id: '2',
    title: "Lumina Luxe",
    description: "Premium Store of high-quality, ethically sourced diamonds with a seamless online shopping experience.",
    tags: ["js", "expressjs", "Next.js", "Tailwind"],
    link: "/demo/2",
    github: "#"
  },
  {
    id: '3',
    title: "Resume Builder Pro",
    description: "Resume builder pro can be used in daily productivity but its still need improvement. ths is beta version.",
    tags: ["js", "html", "css", "etc"],
    link: "/demo/3",
    github: "#"
  }
];

const SOCIALS = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/bipulray1t', color: 'hover:text-white' },
  { name: 'Upwork', icon: Briefcase, url: 'https://www.upwork.com/freelancers/~01ab9002dc95fd6811', color: 'hover:text-[#6fda44]' },
  { name: 'Fiverr', icon: Globe, url: 'https://www.fiverr.com/bipul_ray1?source=gig_cards&referrer_gig_slug=develop-custom-mern-stack-app-with-al-integration-clean-code&ref_ctx_id=53aaf745b00d4e3fab7f84088b4a7e35&imp_id=4246b8b5-03e6-47f8-9f23-25e081eff11f', color: 'hover:text-[#1dbf73]' },
  { name: 'Telegram', icon: Send, url: 'https://t.me/+8801304839196', color: 'hover:text-[#229ED9]' },
  { name: 'WhatsApp', icon: Smartphone, url: 'https://wa.me/8801304839196', color: 'hover:text-[#25D366]' },
];

export default function Portfolio() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground coding-grid selection:bg-primary/30">
      <HireMeModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-mono font-bold text-xl"
          >
            <Link to="/" className="flex items-center gap-2">
              <span className="text-primary">&lt;</span>
              <span>Bipul Ray</span>
              <span className="text-primary">/&gt;</span>
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/60">
            {['About', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsHireModalOpen(true)}
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/20"
          >
            Hire Me
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
              <Terminal size={14} />
              <span>AVAILABLE FOR FREELANCE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Building <span className="text-primary">Digital</span> <br />
              Experiences.
            </h1>
            
            <p className="text-lg text-foreground/60 mb-8 max-w-lg leading-relaxed">
              I'm a freelance software developer specializing in high-performance web applications. 
              Turning complex problems into elegant, scalable solutions.
            </p>

            {/* Status Bubble */}
            <motion.div 
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative">
                <div className={cn(
                  "w-4 h-4 rounded-full animate-pulse",
                  isAvailable ? "bg-green-500" : "bg-red-500"
                )} />
                <div className={cn(
                  "absolute inset-0 w-4 h-4 rounded-full animate-ping opacity-75",
                  isAvailable ? "bg-green-500" : "bg-red-500"
                )} />
              </div>
              <div className="glass px-4 py-2 rounded-2xl rounded-tl-none border-primary/20">
                <p className="text-sm font-mono">
                  {isAvailable ? "I'm currently available for new projects!" : "Currently busy, but let's chat for future!"}
                </p>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ y: -5 }}
                  className={cn("text-foreground/40 transition-colors", social.color)}
                  title={social.name}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <Scene3D />
            <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl border-primary/20 max-w-[200px] hidden lg:block">
              <Code2 className="text-primary mb-2" />
              <p className="text-xs font-mono text-foreground/60">
                // Optimized for performance and scalability
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                <User className="text-primary" />
                About Me
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  With over 5 years of experience in the Programming field, I've helped startups and established businesses 
                  build robust digital products. My approach combines technical excellence with a deep understanding of 
                  user experience.
                </p>
                <p>
                  I thrive in the intersection of design and code, ensuring that every pixel serves a purpose and every 
                  line of code is optimized for the long term.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { label: 'Experience', val: '5+ Years' },
                  { label: 'Projects', val: '120+' },
                  { label: 'Clients', val: '80+' },
                  { label: 'Rating', val: '5.0' },
                ].map((stat) => (
                  <div key={stat.label} className="glass p-4 rounded-xl border-white/5">
                    <p className="text-primary font-bold text-2xl">{stat.val}</p>
                    <p className="text-xs text-foreground/40 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {['React', 'TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'Python'].map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl flex items-center justify-center font-mono text-sm hover:border-primary/50 transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
                <Briefcase className="text-primary" />
                My Projects
              </h2>
              <p className="text-foreground/50">A selection of my recent demo and freelance work.</p>
            </div>
            <Link to="/projects" className="text-primary font-bold flex items-center gap-2 hover:underline">
              View All <ExternalLink size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl overflow-hidden border-white/5 group"
              >
           
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-background flex items-center justify-center ">
                <img src={All_projects[i].demoUrl} alt={project.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
              </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-foreground/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Link to={project.link} className="flex-1 bg-primary text-white text-center py-2 rounded-xl text-sm font-bold hover:bg-primary/80 transition-colors">
                      Live Demo
                    </Link>
                    <a href={project.github} className="p-2 glass rounded-xl hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-foreground/60 mb-12 text-lg">
            Currently accepting new freelance projects. Whether you have a question or just want to say hi, 
            my inbox is always open.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:bipulrx580@gmail.com" className="glass p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-foreground/40 uppercase tracking-widest mb-1">Email Me</p>
                <p className="font-bold">bipulrx580@gmail.com</p>
              </div>
            </a>
            <div className="glass p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <MessageSquare />
              </div>
              <div>
                <p className="text-sm text-foreground/40 uppercase tracking-widest mb-1">Live Chat</p>
                <p className="font-bold">Telegram / WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            {SOCIALS.map((social) => (
              <a key={social.name} href={social.url} className={cn("text-foreground/40 transition-all hover:scale-110", social.color)}>
                <social.icon size={32} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-foreground/30 text-sm font-mono">
        <p>© {new Date().getFullYear()} BIPUL RAY — ALL RIGHTS RESERVED</p>
        <p className="mt-2">BUILT WITH PRECISION & PASSION</p>
      </footer>
    </div>
  );
}
