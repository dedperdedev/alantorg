import { motion } from 'framer-motion';
import { Map, MapPin, Plus, Wallet, Users, Briefcase, ChevronRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const quickActions = [
  { icon: MapPin, label: 'Пункты приёма', to: '/map', color: 'bg-primary/10 text-primary' },
  { icon: Plus, label: 'Создать сдачу', to: '/submission', color: 'bg-amber-light text-amber' },
  { icon: Wallet, label: 'Кошелёк', to: '/wallet', color: 'bg-forest-light text-forest' },
  { icon: Users, label: 'Рефералы', to: '/referrals', color: 'bg-accent/10 text-accent' },
  { icon: Briefcase, label: 'Вакансии', to: '/vacancies', color: 'bg-secondary text-foreground' },
  { icon: Map, label: 'Карта', to: '/map', color: 'bg-primary/10 text-primary' },
];

const seasonItems = [
  { name: 'Черника', price: '220 ₽/кг', emoji: '🫐', trend: '+5%' },
  { name: 'Брусника', price: '185 ₽/кг', emoji: '🔴', trend: '+2%' },
  { name: 'Лисички', price: '340 ₽/кг', emoji: '🍄', trend: '-3%' },
  { name: 'Морошка', price: '520 ₽/кг', emoji: '🟠', trend: '+8%' },
];

const HomePage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-forest-dark px-5 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Alantorg" className="w-10 h-10 rounded-xl object-contain bg-card/20 p-0.5" />
            <div>
              <p className="text-primary-foreground/70 text-xs font-medium">Добро пожаловать</p>
              <h1 className="text-primary-foreground text-lg font-bold">Иван Петров</h1>
            </div>
          </div>
          <div className="bg-card/20 rounded-2xl px-3 py-1.5">
            <p className="text-primary-foreground text-xs font-semibold">Сезон 2026 🌿</p>
          </div>
        </div>
        
        {/* Stats card */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-card/15 backdrop-blur-sm rounded-2xl p-4 border border-primary-foreground/10"
        >
          <p className="text-primary-foreground/70 text-xs mb-2">Мои итоги сезона</p>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-primary-foreground text-2xl font-bold">12 450 ₽</p>
              <p className="text-primary-foreground/60 text-xs mt-0.5">67 кг сдано</p>
            </div>
            <div className="flex items-center gap-1 bg-primary-foreground/20 rounded-full px-2.5 py-1">
              <TrendingUp size={12} className="text-primary-foreground" />
              <span className="text-primary-foreground text-xs font-semibold">+23%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="px-5">
        <h2 className="text-base font-bold mb-3">Быстрые действия</h2>
        <div className="grid grid-cols-3 gap-3">
          {quickActions.map((action, i) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={action.to}
                className="flex flex-col items-center gap-2 rounded-2xl bg-card border border-border p-3.5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`rounded-xl p-2.5 ${action.color}`}>
                  <action.icon size={20} />
                </div>
                <span className="text-[11px] font-semibold text-center leading-tight">{action.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Season Prices */}
      <div className="px-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold">Цены сезона</h2>
          <Link to="/map" className="text-xs text-primary font-semibold flex items-center gap-0.5">
            Все <ChevronRight size={14} />
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1 -mx-5 px-5 scrollbar-hide">
          {seasonItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex-shrink-0 bg-card border border-border rounded-2xl p-4 min-w-[130px] shadow-sm"
            >
              <span className="text-2xl">{item.emoji}</span>
              <p className="text-sm font-bold mt-2">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.price}</p>
              <p className={`text-xs font-semibold mt-1 ${item.trend.startsWith('+') ? 'text-primary' : 'text-accent'}`}>
                {item.trend}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* News */}
      <div className="px-5">
        <h2 className="text-base font-bold mb-3">Новости</h2>
        <div className="space-y-3">
          <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="text-sm font-semibold">Бонус за объём!</p>
                <p className="text-xs text-muted-foreground mt-0.5">Сдайте от 100 кг черники и получите +15% к цене. Акция до конца августа.</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-sm font-semibold">Новый пункт приёма</p>
                <p className="text-xs text-muted-foreground mt-0.5">Открыт пункт "Берёзка" в Котласе. Принимаем голубику и белый гриб.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-4" />
    </div>
  );
};

export default HomePage;
