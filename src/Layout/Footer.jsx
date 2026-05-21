import {  Twitter, Linkedin, Globe } from 'lucide-react';

export default function Footer({ user, activeTab, setActiveTab }) {
  // Hide footer if the critical authentication guard layer is active
  if (!user) return null;

  const currentYear = new Date().getFullYear();

  const handleNavClick = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand/Product Section */}
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Finance Ledger Pipeline
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
              Real-time system allocations, cloud identity protection, and deep balance tracking.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex items-center gap-6 text-xs font-medium">
            <button
              onClick={() => handleNavClick('Dashboard')}
              className={`transition-colors ${
                activeTab === 'Dashboard'
                  ? 'text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => handleNavClick('AuditHistory')}
              className={`transition-colors ${
                activeTab !== 'Dashboard'
                  ? 'text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Ledger Audit
            </button>
          </div>

          {/* Social Links Section */}
          <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
            
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
              aria-label="Main Web Portal"
            >
              <Globe size={18} />
            </a>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 dark:text-slate-500">
          <div>
            &copy; {currentYear} Finance Ledger Inc. All currency metrics rendered in Kshs.
          </div>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:underline">Privacy Protocol</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}