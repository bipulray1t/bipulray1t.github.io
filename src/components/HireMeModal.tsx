import { motion, AnimatePresence } from 'motion/react';
import { X, Github, Briefcase, Globe, Send, Smartphone, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const SOCIALS = [
  { name: 'Fiverr', icon: Globe, url: 'https://www.fiverr.com/bipul_ray1?source=gig_cards&referrer_gig_slug=develop-custom-mern-stack-app-with-al-integration-clean-code&ref_ctx_id=53aaf745b00d4e3fab7f84088b4a7e35&imp_id=4246b8b5-03e6-47f8-9f23-25e081eff11f', color: 'bg-[#1dbf73]', description: 'Order a gig directly' },
  { name: 'Upwork', icon: Briefcase, url: 'https://www.upwork.com/freelancers/~01ab9002dc95fd6811', color: 'bg-[#6fda44]', description: 'Hire me for long-term' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/bipulray1t', color: 'bg-[#333]', description: 'Check my code' },
  { name: 'Telegram', icon: Send, url: 'https://t.me/+8801304839196', color: 'bg-[#229ED9]', description: 'Instant message' },
  { name: 'WhatsApp', icon: Smartphone, url: 'https://wa.me/8801304839196', color: 'bg-[#25D366]', description: 'Direct call/text' },
];

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6 z-[101]"
          >
            <div className="glass rounded-3xl border-primary/20 overflow-hidden">
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-primary/5">
                <div>
                  <h2 className="text-2xl font-bold">Hire Me</h2>
                  <p className="text-sm text-foreground/50">Choose your preferred platform</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                {SOCIALS.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg", social.color)}>
                      <social.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{social.name}</h3>
                      <p className="text-xs text-foreground/40">{social.description}</p>
                    </div>
                    <ExternalLink size={16} className="text-foreground/20 group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
              
              <div className="p-6 bg-white/2 text-center">
                <p className="text-xs text-foreground/30 font-mono uppercase tracking-widest">
                  Response time: Usually within 2 hours
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
