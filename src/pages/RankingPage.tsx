import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Trophy, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRIZE_BR = 1000;
const SEASON_END = 'октябрь 2026';

const categories = [
  { id: 'blueberry', name: 'Черника', emoji: '🫐' },
  { id: 'lingonberry', name: 'Брусника', emoji: '🔴' },
  { id: 'chanterelle', name: 'Лисички', emoji: '🍄' },
  { id: 'cloudberry', name: 'Морошка', emoji: '🟠' },
  { id: 'bilberry', name: 'Голубика', emoji: '🫐' },
  { id: 'mushrooms', name: 'Грибы (прочие)', emoji: '🍄' },
];

const mockLeaders: Record<string, { name: string; kg: number }[]> = {
  blueberry: [
    { name: 'Анна С.', kg: 1240 },
    { name: 'Пётр М.', kg: 980 },
    { name: 'Иван Петров', kg: 670 },
    { name: 'Ольга К.', kg: 520 },
    { name: 'Дмитрий В.', kg: 410 },
  ],
  lingonberry: [
    { name: 'Елена Н.', kg: 680 },
    { name: 'Сергей П.', kg: 540 },
    { name: 'Мария К.', kg: 390 },
    { name: 'Иван Петров', kg: 280 },
    { name: 'Алексей Л.', kg: 210 },
  ],
  chanterelle: [
    { name: 'Николай Г.', kg: 320 },
    { name: 'Иван Петров', kg: 185 },
    { name: 'Татьяна В.', kg: 140 },
    { name: 'Андрей С.', kg: 95 },
    { name: 'Виктория М.', kg: 72 },
  ],
  cloudberry: [
    { name: 'Ирина Д.', kg: 290 },
    { name: 'Олег К.', kg: 210 },
    { name: 'Иван Петров', kg: 150 },
    { name: 'Наталья П.', kg: 88 },
    { name: 'Михаил Т.', kg: 65 },
  ],
  bilberry: [
    { name: 'Дмитрий В.', kg: 450 },
    { name: 'Иван Петров', kg: 320 },
    { name: 'Светлана Р.', kg: 280 },
    { name: 'Павел Ж.', kg: 190 },
    { name: 'Юлия К.', kg: 120 },
  ],
  mushrooms: [
    { name: 'Александр Б.', kg: 580 },
    { name: 'Иван Петров', kg: 340 },
    { name: 'Екатерина Л.', kg: 270 },
    { name: 'Владимир Н.', kg: 195 },
    { name: 'Анна М.', kg: 160 },
  ],
};

const RankingPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const leaders = mockLeaders[activeCategory] ?? [];

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-700 px-5 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="p-2 bg-white/20 rounded-xl">
            <ArrowLeft size={18} className="text-white" />
          </Link>
          <h1 className="text-white text-lg font-bold">Рейтинг сезона</h1>
          <div className="w-10" />
        </div>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <Trophy size={24} className="text-white" />
            </div>
            <div>
              <p className="text-white/90 text-sm font-semibold">Призовой фонд</p>
              <p className="text-white text-xl font-bold">{PRIZE_BR.toLocaleString()} Br</p>
              <p className="text-white/70 text-xs mt-0.5">Награждение по итогам сезона ({SEASON_END})</p>
            </div>
          </div>
          <p className="text-white/80 text-xs mt-3">Лидеры по каждой категории получают призы. Чем больше сдал — выше шанс победить!</p>
        </motion.div>
      </div>

      {/* Category tabs */}
      <div className="px-5 -mt-2">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                activeCategory === cat.id ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="px-5 mt-4">
        <h2 className="text-sm font-semibold text-muted-foreground mb-3">
          Топ по категории «{categories.find((c) => c.id === activeCategory)?.name}»
        </h2>
        <div className="bg-card border border-border rounded-2xl overflow-hidden divide-y divide-border">
          <AnimatePresence mode="wait">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name + leader.kg}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-3 p-4"
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    index === 0 ? 'bg-amber-100 text-amber-700' : index === 1 ? 'bg-slate-200 text-slate-600' : index === 2 ? 'bg-amber-50 text-amber-800' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {index < 3 ? <Medal size={18} /> : <span className="text-sm font-bold">{index + 1}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold ${leader.name === 'Иван Петров' ? 'text-primary' : ''}`}>{leader.name}</p>
                  <p className="text-xs text-muted-foreground">{leader.kg.toLocaleString()} кг сдано</p>
                </div>
                <p className="text-lg font-bold text-primary">{leader.kg.toLocaleString()} кг</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="h-6" />
    </div>
  );
};

export default RankingPage;
