import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Smartphone, Tablet, Monitor, RotateCcw, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';
import { url } from 'inspector';
import UrlReturn from '../data/writemeurl';

const DEVICES = [
  { id: 'mobile', name: 'Mobile', icon: Smartphone, width: 375, height: 667 },
  { id: 'tablet', name: 'Tablet', icon: Tablet, width: 768, height: 1024 },
  { id: 'desktop', name: 'Desktop', icon: Monitor, width: '100%', height: '100%' },
];

export default function DemoPage() {
  
  const {id} = useParams();
  const [activeDevice, setActiveDevice] = useState(DEVICES[2]);
  const [key, setKey] = useState(0); // For iframe refresh

  // Mock URL for demo - in a real app, this would come from a project database
  

  const DemoUrl =  UrlReturn(id); // Fallback URL

  const refreshDemo = () => setKey(prev => prev + 1);

  return (
    <div className="h-screen flex flex-col bg-[#050505] text-foreground">
      {/* Demo Header */}
      <header className="h-16 glass border-b border-white/10 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-6">
          <Link to="/projects" className="p-2 hover:bg-white/5 rounded-lg transition-colors text-foreground/60 hover:text-primary">
            <ArrowLeft size={20} />
          </Link>
          <div className="hidden md:block">
            <h1 className="text-sm font-bold">Project Demo #{id}</h1>
            <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Live Preview Mode</p>
          </div>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center gap-2 glass p-1 rounded-xl border-white/5">
          {DEVICES.map((device) => (
            <button
              key={device.id}
              onClick={() => setActiveDevice(device)}
              className={cn(
                "p-2 rounded-lg transition-all flex items-center gap-2 text-xs font-medium",
                activeDevice.id === device.id 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-foreground/40 hover:text-foreground hover:bg-white/5"
              )}
            >
              <device.icon size={16} />
              <span className="hidden sm:inline">{device.name}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={refreshDemo}
            className="p-2 glass rounded-lg hover:text-primary transition-colors" 
            title="Refresh Demo"
          >
            <RotateCcw size={18} />
          </button>
          <a 
            href={DemoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-primary/80 transition-colors"
          >
            Open Original <ExternalLink size={14} />
          </a>
        </div>
      </header>

      {/* Demo Viewport */}
      <main className="flex-1 bg-black overflow-hidden flex items-center justify-center p-4 md:p-8">
        <motion.div
          key={activeDevice.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative shadow-2xl shadow-primary/10 rounded-xl overflow-hidden bg-white"
          style={{
            width: activeDevice.width,
            height: activeDevice.height,
            maxWidth: '100%',
            maxHeight: '100%',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Iframe Overlay for Mobile/Tablet Frame Feel */}
          {activeDevice.id !== 'desktop' && (
            <div className="absolute inset-0 pointer-events-none border-[12px] border-[#1a1a1a] rounded-xl z-10" />
          )}
          
          <iframe
            key={key}
            src={DemoUrl}
            className="w-full h-full border-none"
            title="Project Demo"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </main>
    </div>
  );
}
