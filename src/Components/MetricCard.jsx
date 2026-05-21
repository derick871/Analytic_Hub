// src/components/MetricCard.jsx

export default function MetricCard({ title, value, icon: Icon, variant = 'blue' }) {
  const themes = {
    amber: 'bg-emerald-500/10 text-amber-400 border-amber-500/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  };

  return (
    <div className="bg-slate-900 p-4 rounded-xl border border-white flex items-center justify-between">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-white">{title}</span>
        <h3 className={`text-2xl font-bold tracking-tight mt-1 ${variant === 'red' ? 'text-red-400' : variant === 'emerald' ? 'text-emerald-400' : 'text-blue-400'}`}>
          {value}
        </h3>
      </div>
      <div className={`p-2.5 rounded-lg ${themes[variant] || themes.blue}`}>
        <Icon size={20} />
      </div>
    </div>
  );
}