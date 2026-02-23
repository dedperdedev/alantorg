import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, ChevronRight, MapPin, Briefcase, Users, CreditCard, Bell, FileText, HelpCircle, LogOut, Settings } from 'lucide-react';
import logo from '@/assets/logo.png';

const menuSections = [
  {
    title: 'Активности',
    items: [
      { icon: MapPin, label: 'Мои сдачи', to: '/submissions' },
      { icon: Users, label: 'Рефералы', to: '/referrals', badge: '+500 Br' },
      { icon: Briefcase, label: 'Вакансии', to: '/vacancies' },
    ],
  },
  {
    title: 'Финансы',
    items: [
      { icon: CreditCard, label: 'Реквизиты выплат', to: '/profile' },
      { icon: FileText, label: 'Документы', to: '/profile' },
    ],
  },
  {
    title: 'Настройки',
    items: [
      { icon: Bell, label: 'Уведомления', to: '/profile' },
      { icon: Settings, label: 'Настройки', to: '/profile' },
      { icon: HelpCircle, label: 'Поддержка и FAQ', to: '/profile' },
    ],
  },
];

const ProfilePage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-forest-light rounded-2xl flex items-center justify-center">
            <User size={28} className="text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-bold">Иван Петров</h1>
            <p className="text-xs text-muted-foreground">+7 921 123-45-67</p>
            <p className="text-xs text-muted-foreground">Архангельская обл.</p>
          </div>
        </div>
        <button className="mt-4 w-full bg-secondary text-foreground rounded-xl py-2.5 text-sm font-semibold">
          Редактировать профиль
        </button>
      </div>

      {/* Menu */}
      <div className="px-5 space-y-6 pb-8">
        {menuSections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.1 }}
          >
            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">{section.title}</p>
            <div className="bg-card border border-border rounded-2xl overflow-hidden divide-y divide-border">
              {section.items.map(item => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="flex items-center gap-3 px-4 py-3.5 hover:bg-secondary/50 transition-colors"
                >
                  <item.icon size={18} className="text-muted-foreground" />
                  <span className="flex-1 text-sm font-medium">{item.label}</span>
                  {'badge' in item && item.badge && (
                    <span className="bg-forest-light text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">{item.badge}</span>
                  )}
                  <ChevronRight size={16} className="text-muted-foreground" />
                </Link>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 text-accent text-sm font-semibold py-3">
          <LogOut size={16} /> Выйти
        </button>

        {/* Footer */}
        <div className="flex flex-col items-center gap-2 pt-4">
          <img src={logo} alt="Alantorg" className="w-12 h-12 opacity-40" />
          <p className="text-[10px] text-muted-foreground">Версия 2.0.0 • Alantorg © 2026</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
