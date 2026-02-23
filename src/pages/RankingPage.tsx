import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Trophy, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRIZE_BR = 1000;
const SEASON_END = 'октябрь 2026';

/** Награда в Br за место (1–10). Сумма = 1000. */
const REWARDS_BY_PLACE: number[] = [250, 180, 140, 110, 90, 70, 55, 45, 35, 25];

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
    { name: 'Светлана Р.', kg: 380 },
    { name: 'Николай Г.', kg: 290 },
    { name: 'Елена Н.', kg: 240 },
    { name: 'Михаил Т.', kg: 195 },
    { name: 'Татьяна В.', kg: 160 },
  ],
  lingonberry: [
    { name: 'Елена Н.', kg: 680 },
    { name: 'Сергей П.', kg: 540 },
    { name: 'Мария К.', kg: 390 },
    { name: 'Иван Петров', kg: 280 },
    { name: 'Алексей Л.', kg: 210 },
    { name: 'Ольга К.', kg: 180 },
    { name: 'Дмитрий В.', kg: 150 },
    { name: 'Ирина Д.', kg: 120 },
    { name: 'Павел Ж.', kg: 95 },
    { name: 'Наталья П.', kg: 70 },
  ],
  chanterelle: [
    { name: 'Николай Г.', kg: 320 },
    { name: 'Иван Петров', kg: 185 },
    { name: 'Татьяна В.', kg: 140 },
    { name: 'Андрей С.', kg: 95 },
    { name: 'Виктория М.', kg: 72 },
    { name: 'Олег К.', kg: 58 },
    { name: 'Мария К.', kg: 45 },
    { name: 'Сергей П.', kg: 38 },
    { name: 'Екатерина Л.', kg: 28 },
    { name: 'Владимир Н.', kg: 22 },
  ],
  cloudberry: [
    { name: 'Ирина Д.', kg: 290 },
    { name: 'Олег К.', kg: 210 },
    { name: 'Иван Петров', kg: 150 },
    { name: 'Наталья П.', kg: 88 },
    { name: 'Михаил Т.', kg: 65 },
    { name: 'Анна С.', kg: 52 },
    { name: 'Елена Н.', kg: 41 },
    { name: 'Дмитрий В.', kg: 33 },
    { name: 'Юлия К.', kg: 26 },
    { name: 'Павел Ж.', kg: 18 },
  ],
  bilberry: [
    { name: 'Дмитрий В.', kg: 450 },
    { name: 'Иван Петров', kg: 320 },
    { name: 'Светлана Р.', kg: 280 },
    { name: 'Павел Ж.', kg: 190 },
    { name: 'Юлия К.', kg: 120 },
    { name: 'Ольга К.', kg: 95 },
    { name: 'Александр Б.', kg: 78 },
    { name: 'Мария К.', kg: 62 },
    { name: 'Николай Г.', kg: 48 },
    { name: 'Татьяна В.', kg: 35 },
  ],
  mushrooms: [
    { name: 'Александр Б.', kg: 580 },
    { name: 'Иван Петров', kg: 340 },
    { name: 'Екатерина Л.', kg: 270 },
    { name: 'Владимир Н.', kg: 195 },
    { name: 'Анна М.', kg: 160 },
    { name: 'Сергей П.', kg: 130 },
    { name: 'Олег К.', kg: 105 },
    { name: 'Мария К.', kg: 82 },
    { name: 'Дмитрий В.', kg: 58 },
    { name: 'Ирина Д.', kg: 42 },
  ],
};

const CURRENT_USER = 'Иван Петров';

const RankingPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const leaders = mockLeaders[activeCategory] ?? [];
  const myPlace = leaders.findIndex((l) => l.name === CURRENT_USER) + 1;
  const myEntry = leaders.find((l) => l.name === CURRENT_USER);

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-700 px-5 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-3">
          <Link to="/" className="p-2 bg-white/20 rounded-xl" title="Назад на главную">
            <ArrowLeft size={18} className="text-white" />
          </Link>
          <h1 className="text-white text-lg font-bold">Рейтинг сезона</h1>
          <div className="w-10" />
        </div>
        <p className="text-white/80 text-xs leading-relaxed mb-5">Сдавайте больше — поднимайтесь в рейтинге. В конце сезона — призы!</p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Trophy size={24} className="text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-white/90 text-sm font-semibold">Призовой фонд</p>
              <p className="text-white text-xl font-bold mt-0.5">{PRIZE_BR.toLocaleString()} Br</p>
              <p className="text-white/70 text-xs mt-1">Награждение по итогам сезона ({SEASON_END})</p>
            </div>
          </div>
          <p className="text-white/80 text-xs leading-relaxed mt-4 pt-3 border-t border-white/10">Лидеры по каждой категории получают призы. Чем больше сдал — выше шанс победить!</p>
        </motion.div>
      </div>

      {/* Category tabs */}
      <div className="px-5 mt-1">
        <p className="text-sm font-semibold text-foreground mb-2">Выберите категорию (нажмите на нужную):</p>
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

      {/* My place card */}
      {myPlace > 0 && myEntry && (
        <div className="px-5 mt-4">
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-4">
            <p className="text-xs font-semibold text-muted-foreground mb-1">Ваше место в категории «{categories.find((c) => c.id === activeCategory)?.name}»</p>
            <p className="text-2xl font-bold text-primary">Место №{myPlace}</p>
            <p className="text-sm text-muted-foreground mt-0.5">Вы сдали {myEntry.kg.toLocaleString()} кг</p>
            <p className="text-sm font-semibold text-primary mt-1">Награда: {REWARDS_BY_PLACE[myPlace - 1]} Br</p>
          </div>
        </div>
      )}

      {/* Leaderboard */}
      <div className="px-5 mt-4">
        <h2 className="text-sm font-semibold text-foreground mb-2">Список лидеров по «{categories.find((c) => c.id === activeCategory)?.name}»</h2>
        <p className="text-xs text-muted-foreground mb-3">Отсортировано по количеству сданных кг</p>
        <div className="bg-card border border-border rounded-2xl overflow-hidden divide-y divide-border">
          <AnimatePresence mode="wait">
            {leaders.map((leader, index) => {
              const rewardBr = REWARDS_BY_PLACE[index] ?? 0;
              return (
                <motion.div
                  key={leader.name + leader.kg + index}
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
                    <p className={`font-semibold ${leader.name === CURRENT_USER ? 'text-primary' : ''}`}>
                      {leader.name}
                      {leader.name === CURRENT_USER && <span className="ml-1.5 text-xs font-normal text-primary">(это вы)</span>}
                    </p>
                    <p className="text-xs text-muted-foreground">{leader.kg.toLocaleString()} кг сдано</p>
                    <p className="text-xs font-semibold text-primary mt-0.5">Награда: {rewardBr} Br</p>
                  </div>
                  <p className="text-lg font-bold text-primary">{leader.kg.toLocaleString()} кг</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="h-6" />
    </div>
  );
};

export default RankingPage;
