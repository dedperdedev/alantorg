import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, Gift, ChevronRight, CreditCard, Banknote } from 'lucide-react';
import { walletTransactions } from '@/data/mockData';

const WalletPage = () => {
  const balance = 7800;
  const bonuses = 1200;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-forest-dark px-5 pt-12 pb-8 rounded-b-3xl">
        <h1 className="text-primary-foreground text-lg font-bold mb-6">Кошелёк</h1>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-card/15 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10"
        >
          <p className="text-primary-foreground/70 text-xs">Баланс</p>
          <p className="text-primary-foreground text-3xl font-bold mt-1">{balance.toLocaleString()} ₽</p>
          <div className="flex items-center gap-2 mt-2">
            <Gift size={14} className="text-primary-foreground/70" />
            <span className="text-primary-foreground/70 text-xs">Бонусы: {bonuses} ₽</span>
          </div>
          <div className="flex gap-3 mt-5">
            <button className="flex-1 bg-primary-foreground text-primary rounded-xl py-2.5 text-sm font-bold flex items-center justify-center gap-2">
              <Banknote size={16} /> Вывести
            </button>
            <button className="flex-1 bg-primary-foreground/20 text-primary-foreground rounded-xl py-2.5 text-sm font-semibold flex items-center justify-center gap-2 border border-primary-foreground/20">
              <CreditCard size={16} /> Реквизиты
            </button>
          </div>
        </motion.div>
      </div>

      {/* Transactions */}
      <div className="px-5 py-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold">История операций</h2>
          <button className="text-xs text-primary font-semibold flex items-center gap-0.5">
            Фильтры <ChevronRight size={14} />
          </button>
        </div>
        <div className="space-y-2">
          {walletTransactions.map((tx, i) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                tx.type === 'income' ? 'bg-forest-light' : tx.type === 'bonus' ? 'bg-amber-light' : 'bg-secondary'
              }`}>
                {tx.type === 'income' ? <ArrowDownLeft size={18} className="text-primary" /> :
                 tx.type === 'bonus' ? <Gift size={18} className="text-amber" /> :
                 <ArrowUpRight size={18} className="text-muted-foreground" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{tx.description}</p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${tx.amount >= 0 ? 'text-primary' : 'text-foreground'}`}>
                  {tx.amount >= 0 ? '+' : ''}{tx.amount.toLocaleString()} ₽
                </p>
                <p className={`text-[10px] font-medium ${
                  tx.status === 'completed' ? 'text-primary' : tx.status === 'processing' ? 'text-amber' : 'text-muted-foreground'
                }`}>
                  {tx.status === 'completed' ? 'Выполнено' : tx.status === 'processing' ? 'В обработке' : 'Ожидание'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
