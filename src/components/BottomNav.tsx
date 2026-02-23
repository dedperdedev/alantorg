import { NavLink, useLocation } from 'react-router-dom';
import { Home, Map, Wallet, ShoppingBag, User } from 'lucide-react';

const tabs = [
  { to: '/', icon: Home, label: 'Главная' },
  { to: '/map', icon: Map, label: 'Карта' },
  { to: '/wallet', icon: Wallet, label: 'Кошелёк' },
  { to: '/shop', icon: ShoppingBag, label: 'Магазин' },
  { to: '/profile', icon: User, label: 'Профиль' },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur-lg safe-bottom">
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-2 pt-1 pb-1">
        {tabs.map(({ to, icon: Icon, label }) => {
          const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);
          return (
            <NavLink
              key={to}
              to={to}
              className="flex flex-1 flex-col items-center gap-0.5 py-2 transition-colors"
            >
              <div className={`rounded-xl p-1.5 transition-all ${isActive ? 'bg-primary/10' : ''}`}>
                <Icon
                  size={22}
                  className={isActive ? 'text-primary' : 'text-muted-foreground'}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
              </div>
              <span className={`text-[10px] font-semibold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                {label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
