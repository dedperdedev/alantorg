import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Banknote, ChevronRight, Search, Filter, Briefcase, Heart, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { vacancies } from '@/data/mockData';

const VacanciesPage = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = vacancies.filter(v =>
    v.title.toLowerCase().includes(search.toLowerCase()) ||
    v.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-card border-b border-border px-5 pt-12 pb-4 sticky top-0 z-30">
        <div className="flex items-center gap-3 mb-3">
          <Link to="/" className="p-2 bg-secondary rounded-xl">
            <ArrowLeft size={18} className="text-foreground" />
          </Link>
          <h1 className="text-xl font-bold">Вакансии</h1>
        </div>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Поиск вакансий..."
            className="w-full bg-secondary rounded-xl pl-10 pr-10 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Filter size={16} />
          </button>
        </div>
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {['Все', 'Сезонная', 'Постоянная'].map(f => (
            <button key={f} className="bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors">
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="px-5 py-4 space-y-3">
        {filtered.map((vac, i) => (
          <motion.div
            key={vac.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <button
              onClick={() => setSelected(selected === vac.id ? null : vac.id)}
              className="w-full text-left bg-card border border-border rounded-2xl p-4 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-forest-light rounded-xl flex items-center justify-center">
                      <Briefcase size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{vac.title}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
                          <MapPin size={10} /> {vac.city}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${vac.type === 'seasonal' ? 'bg-amber-light text-amber' : 'bg-forest-light text-primary'}`}>
                          {vac.type === 'seasonal' ? 'Сезонная' : 'Постоянная'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock size={12} /> {vac.schedule}</span>
                    <span className="flex items-center gap-1"><Banknote size={12} /> {vac.salary}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button className="p-1.5">
                    <Heart size={16} className="text-muted-foreground" />
                  </button>
                  <ChevronRight size={16} className={`text-muted-foreground transition-transform ${selected === vac.id ? 'rotate-90' : ''}`} />
                </div>
              </div>

              {selected === vac.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="mt-3 pt-3 border-t border-border"
                >
                  <p className="text-sm mb-2">{vac.description}</p>
                  <p className="text-xs font-semibold mb-1">Требования:</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5 mb-2">
                    {vac.requirements.map((r, ri) => <li key={ri}>• {r}</li>)}
                  </ul>
                  <p className="text-xs font-semibold mb-1">Условия:</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5 mb-3">
                    {vac.conditions.map((c, ci) => <li key={ci}>✓ {c}</li>)}
                  </ul>
                  <button className="w-full bg-primary text-primary-foreground rounded-xl py-2.5 text-sm font-bold flex items-center justify-center gap-2">
                    <Send size={16} /> Откликнуться
                  </button>
                </motion.div>
              )}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VacanciesPage;
