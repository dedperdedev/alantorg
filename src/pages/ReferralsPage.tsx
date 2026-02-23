import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Copy, Users, Gift, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReferralsPage = () => {
  const code = 'IVAN2026';
  const stats = { invited: 12, activated: 8, earned: 2400 };

  const referrals = [
    { name: 'Мария К.', status: 'active', bonus: 0.5, date: '20.02.2026' },
    { name: 'Алексей П.', status: 'active', bonus: 0.5, date: '18.02.2026' },
    { name: 'Ольга С.', status: 'pending', bonus: 0, date: '15.02.2026' },
    { name: 'Дмитрий В.', status: 'active', bonus: 0.5, date: '10.02.2026' },
    { name: 'Елена Н.', status: 'pending', bonus: 0, date: '08.02.2026' },
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-accent to-berry px-5 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="p-2 bg-card/20 rounded-xl">
            <ArrowLeft size={18} className="text-accent-foreground" />
          </Link>
          <h1 className="text-accent-foreground text-lg font-bold">Рефералы</h1>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-card/15 backdrop-blur-sm rounded-2xl p-5 border border-accent-foreground/10"
        >
          <p className="text-accent-foreground/70 text-xs">Ваш реферальный код</p>
          <div className="flex items-center gap-3 mt-2">
            <p className="text-accent-foreground text-2xl font-bold tracking-wider">{code}</p>
            <button className="p-2 bg-accent-foreground/20 rounded-xl">
              <Copy size={16} className="text-accent-foreground" />
            </button>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="flex-1 bg-accent-foreground text-accent rounded-xl py-2.5 text-sm font-bold flex items-center justify-center gap-2">
              <Share2 size={16} /> Поделиться
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="px-5 -mt-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Приглашено', value: stats.invited, icon: Users },
            { label: 'Активных', value: stats.activated, icon: CheckCircle },
            { label: 'Заработано', value: `${stats.earned} Br`, icon: Gift },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-3 text-center shadow-sm"
            >
              <stat.icon size={18} className="mx-auto text-primary mb-1" />
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="px-5 mt-6">
        <h2 className="text-base font-bold mb-3">Как это работает</h2>
        <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
          {[
            'Поделитесь кодом с друзьями',
            'Друг регистрируется по вашей ссылке',
            'Друг делает первую сдачу от 5 кг',
            'Вы получаете 0,5 бел. руб.',
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
              <p className="text-sm">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent */}
      <div className="px-5 mt-6">
        <h2 className="text-base font-bold mb-3">Приглашённые</h2>
        <div className="space-y-2">
          {referrals.map((ref, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 bg-card border border-border rounded-2xl p-3"
            >
              <div className="w-9 h-9 bg-forest-light rounded-xl flex items-center justify-center">
                <Users size={16} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold">{ref.name}</p>
                <p className="text-xs text-muted-foreground">{ref.date}</p>
              </div>
              {ref.status === 'active' ? (
                <span className="text-xs font-semibold text-primary flex items-center gap-1">
                  <CheckCircle size={12} /> +{ref.bonus} Br
                </span>
              ) : (
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={12} /> Ожидание
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralsPage;
