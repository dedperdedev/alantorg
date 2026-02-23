import { ReactNode } from 'react';
import BottomNav from './BottomNav';

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="mx-auto max-w-lg min-h-screen bg-background">
      <main className="pb-20">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default MobileLayout;
