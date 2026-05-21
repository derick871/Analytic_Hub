import { Link } from 'react-router-dom';
import { ArrowUpRight,  } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 tracking-wide uppercase">
            Finance Dashboard
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            &copy; {currentYear} Ledger Engines Inc. All rights reserved.
          </p>
        </div>

        {/* Center/Right: Social Media Connections */}
        <div className="flex items-center gap-5 text-slate-400 dark:text-slate-500">
         {/* <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-pink-600 dark:hover:text-pink-500 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
         
          <a 
            href="https://ke.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedIn size={18} />
          </a> */}
        </div>

        {/* Far Right: Primary Navigation Action */}
        <div className="flex items-center">
          <Link 
            to="/monthlySummary" 
            className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold py-2 px-4 rounded-xl transition-all duration-200 shadow-sm"
          >
            <span>Monthly Summary</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

      </div>
    </footer>
  );
}