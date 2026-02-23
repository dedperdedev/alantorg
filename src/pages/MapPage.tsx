import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Phone, Clock, ChevronRight, Filter, List, Map as MapIcon } from 'lucide-react';
import { receptionPoints } from '@/data/mockData';

const MapPage = () => {
  const [view, setView] = useState<'map' | 'list'>('list');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = receptionPoints.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.city.toLowerCase().includes(search.toLowerCase())
  );

  const selectedPoint = receptionPoints.find(p => p.id === selected);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-card border-b border-border px-5 pt-12 pb-4 sticky top-0 z-30">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-xl font-bold">Пункты приёма</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-xl transition-colors ${view === 'list' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}
            >
              <List size={18} />
            </button>
            <button
              onClick={() => setView('map')}
              className={`p-2 rounded-xl transition-colors ${view === 'map' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}
            >
              <MapIcon size={18} />
            </button>
          </div>
        </div>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Поиск по названию или городу..."
            className="w-full bg-secondary rounded-xl pl-10 pr-10 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Filter size={16} />
          </button>
        </div>
      </div>

      {view === 'map' ? (
        /* Map View Placeholder */
        <div className="relative h-[calc(100vh-180px)] bg-forest-light flex items-center justify-center">
          <div className="text-center px-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapIcon size={28} className="text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">Карта пунктов приёма</p>
            <p className="text-xs text-muted-foreground mt-1">Интерактивная карта будет доступна после подключения Google Maps API</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {filtered.slice(0, 5).map(p => (
                <button
                  key={p.id}
                  onClick={() => { setSelected(p.id); setView('list'); }}
                  className="bg-card rounded-full px-3 py-1.5 text-xs font-medium shadow-sm border border-border"
                >
                  📍 {p.city}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* List View */
        <div className="px-5 py-4 space-y-3">
          <p className="text-xs text-muted-foreground">{filtered.length} пунктов найдено</p>
          {filtered.map((point, i) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <button
                onClick={() => setSelected(selected === point.id ? null : point.id)}
                className="w-full text-left bg-card border border-border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${point.isOpen ? 'bg-primary' : 'bg-muted-foreground'}`} />
                      <p className="text-sm font-bold">{point.name}</p>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5 text-muted-foreground">
                      <MapPin size={12} />
                      <p className="text-xs">{point.address}, {point.city}</p>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-muted-foreground">
                      <Clock size={12} />
                      <p className="text-xs">{point.hours}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className={`text-muted-foreground transition-transform ${selected === point.id ? 'rotate-90' : ''}`} />
                </div>

                {/* Expanded */}
                {selected === point.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mt-3 pt-3 border-t border-border"
                  >
                    <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
                      <Phone size={12} />
                      <p className="text-xs">{point.phone}</p>
                    </div>
                    <p className="text-xs font-semibold mb-1.5">Принимаем:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {point.acceptedItems.map(item => (
                        <span key={item.name} className="bg-forest-light text-forest-dark rounded-full px-2.5 py-1 text-xs font-medium">
                          {item.name} — {item.price} Br/кг
                        </span>
                      ))}
                    </div>
                    {point.notes && (
                      <p className="text-xs text-muted-foreground mt-2 italic">⚠️ {point.notes}</p>
                    )}
                    <button className="mt-3 w-full bg-primary text-primary-foreground rounded-xl py-2.5 text-sm font-semibold">
                      Построить маршрут
                    </button>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapPage;
