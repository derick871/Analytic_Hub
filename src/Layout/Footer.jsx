import React from 'react';
import { ShieldCheck, Database, CalendarRange, History } from 'lucide-react';

export default function Footer({ activeTab, setActiveTab, totalCount = 0 }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        
        {/* Core Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          
          {/* Brand & State Info */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="bg-blue-500/10 dark:bg-blue-500/20 px-2 py-0.5 rounded text-[10px] font-black tracking-wider text-blue-600 dark:text-blue-400">
                PFH CORE
              </span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Ledger Engine v2.1
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Real-time operational dashboard tracking financial cashflow and asset metrics.
            </p>
          </div>

          {/* Contextual Quick Navigation Pipeline */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <button
              onClick={() => setActiveTab?.('Dashboard')}
              className={`flex items-center gap-1.5 transition-colors ${
                activeTab === 'Dashboard' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Database size={13} />
              Pipeline
            </button>
            <button
              onClick={() => setActiveTab?.('Monthly Summary')}
              className={`flex items-center gap-1.5 transition-colors ${
                activeTab === 'Monthly Summary' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <CalendarRange size={13} />
              Summary
            </button>
            <button
              onClick={() => setActiveTab?.('Ledger Logs')}
              className={`flex items-center gap-1.5 transition-colors ${
                activeTab === 'Ledger Logs' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <History size={13} />
              Audit Logs
            </button>
          </div>

          {/* Operational Metrics & Security Badging */}
          <div className="flex flex-col items-center md:items-end gap-1 text-[11px] text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck size={14} />
              <span>Cloud Identity Secured</span>
            </div>
            <div className="text-slate-400 dark:text-slate-500 text-[10px]">
              Active Allocated Records: <span className="font-semibold text-slate-700 dark:text-slate-300">{totalCount}</span>
            </div>
          </div>

        </div>

        {/* System Divider and Copyright strip */}
        <div className="border-t border-slate-100 dark:border-slate-800/60 mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-400 dark:text-slate-500">
          <div>
            &copy; {currentYear} PFH Financial Systems. All allocations and operational data records reserved.
          </div>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Security Protocol</span>
            <span className="hover:underline cursor-pointer">Ledger Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}