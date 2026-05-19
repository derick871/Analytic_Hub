import React, { useState } from 'react';
import { LayoutDashboard, Layers, Calendar, LogOut, Menu, X, Wallet } from 'lucide-react';

export default function Navbar({ user, netCashFlow, activeTab, setActiveTab, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  // Hardcoded date layout matching the project context snapshot
  const CURRENT_SYSTEM_DATE = "May 19, 2026";

  return (
    <nav className="bg-slate-900 text-slate-100 border-b border-slate-800/80 sticky top-0 z-50 px-4 lg:px-8 shadow-sm">
      <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
        
        {/* LEFT: BRAND LOGO */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg font-black text-xs tracking-tighter shadow-md shadow-blue-600/20">
            PFH
          </div>
          <span className="font-bold text-base bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
            FinAnalytics Hub
          </span>
        </div>

        {/* MIDDLE: ROUTE LINKS (DESKTOP) */}
        <div className="hidden md:flex items-center gap-1.5">
          <button 
            onClick={() => setActiveTab('Dashboard')} 
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'Dashboard' 
                ? 'bg-slate-800 text-blue-400 border border-slate-700/50 shadow-inner' 
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40'
            }`}
          >
            <LayoutDashboard size={14} /> 
            <span>Dashboard</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('Ledger Logs')} 
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'Ledger Logs' 
                ? 'bg-slate-800 text-blue-400 border border-slate-700/50 shadow-inner' 
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40'
            }`}
          >
            <Layers size={14} /> 
            <span>Ledger Logs</span>
          </button>
        </div>

        {/* RIGHT: METRICS, PROFILE & SESSION BUTTON (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Calendar Anchor */}
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400 bg-slate-950 border border-slate-800/80 px-3 py-1.5 rounded-xl">
            <Calendar size={13} className="text-blue-500" /> 
            <span>{CURRENT_SYSTEM_DATE}</span>
          </div>

          {/* Quick Balance Preview */}
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Net Asset:</span>
            <span className={`font-mono font-bold ${netCashFlow >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              Kshs {netCashFlow.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
          </div>
          
          {/* EXIT SESSION BUTTON */}
          <button 
            onClick={onLogout} 
            className="flex items-center gap-2 bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white border border-rose-500/20 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm"
            title="Terminate Secure Session"
          >
            <LogOut size={14} />
            <span>Exit Session</span>
          </button>
        </div>

        {/* MOBILE TRIGGER SWITCH BUTTON */}
        <div className="md:hidden flex items-center gap-3">
          {/* Quick Balance Mobile Metric */}
          <div className="bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-[11px] font-mono font-bold text-emerald-400">
            Kshs {netCashFlow.toFixed(0)}
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-1.5 text-slate-400 hover:text-slate-100 bg-slate-800/60 rounded-lg border border-slate-700/40 focus:outline-none"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* MOBILE EXPANDED NAVIGATION PANEL */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800/60 py-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-2 space-y-1">
            <button 
              onClick={() => { setActiveTab('Dashboard'); setIsOpen(false); }} 
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium ${
                activeTab === 'Dashboard' ? 'bg-slate-800 text-blue-400' : 'text-slate-400 hover:bg-slate-800/40'
              }`}
            >
              <LayoutDashboard size={16} /> Dashboard
            </button>
            <button 
              onClick={() => { setActiveTab('Ledger Logs'); setIsOpen(false); }} 
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium ${
                activeTab === 'Ledger Logs' ? 'bg-slate-800 text-blue-400' : 'text-slate-400 hover:bg-slate-800/40'
              }`}
            >
              <Layers size={16} /> Ledger Logs
            </button>
          </div>
          
          <div className="pt-3 border-t border-slate-800/60 px-4 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><Calendar size={12}/> Pipeline Context:</span>
              <span className="font-medium text-slate-300">{CURRENT_SYSTEM_DATE}</span>
            </div>
            
            <button 
              onClick={() => { setIsOpen(false); onLogout(); }} 
              className="w-full flex items-center justify-center gap-2 bg-rose-500/10 hover:bg-rose-500 hover:text-white text-rose-400 py-2.5 rounded-xl text-xs font-semibold border border-rose-500/20 transition-all"
            >
              <LogOut size={14} />
              <span>Exit System Session</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}