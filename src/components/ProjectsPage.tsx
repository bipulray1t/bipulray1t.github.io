import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Code2, Search } from 'lucide-react';
import { useState } from 'react';
import All_projects from '../data/writeme.json';

const ALL_PROJECTS = All_projects;

export default function ProjectsPage() {
  const [search, setSearch] = useState('');

  const filteredProjects = ALL_PROJECTS.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) || 
    p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background text-foreground coding-grid p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-mono text-sm">
            <ArrowLeft size={16} /> BACK_TO_HOME
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl font-extrabold mb-4">All <span className="text-primary">Projects</span></h1>
              <p className="text-foreground/50 max-w-xl">
                Explore my full catalog of software solutions, from web engines to mobile applications.
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
              <input 
                type="text" 
                placeholder="Search projects or tech..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full glass bg-white/5 border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass rounded-3xl overflow-hidden border-white/5 group"
            >
              <div className="h-40 bg-gradient-to-br from-primary/10 to-background flex items-center justify-center ">
                <img src={project.demoUrl} alt={project.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-6 line-clamp-2">
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
                  <Link 
                    to={`/demo/${project.id}`}
                    className="flex-1 bg-primary text-white text-center py-2 rounded-xl text-sm font-bold hover:bg-primary/80 transition-colors"
                  >
                    Live Demo
                  </Link>
                  <a href="#" className="p-2 glass rounded-xl hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-foreground/30 font-mono">NO_PROJECTS_FOUND_FOR_"{search.toUpperCase()}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
