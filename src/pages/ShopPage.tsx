import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Search, BookOpen, ChevronRight } from 'lucide-react';
import { products, articles } from '@/data/mockData';

const ShopPage = () => {
  const [tab, setTab] = useState<'products' | 'articles'>('products');
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  const filteredArticles = articles.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-card border-b border-border px-5 pt-12 pb-4 sticky top-0 z-30">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-xl font-bold">Магазин</h1>
          <button className="relative p-2 bg-secondary rounded-xl">
            <ShoppingCart size={18} className="text-foreground" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-secondary rounded-xl p-1 mb-3">
          <button
            onClick={() => setTab('products')}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${tab === 'products' ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground'}`}
          >
            Товары
          </button>
          <button
            onClick={() => setTab('articles')}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${tab === 'articles' ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground'}`}
          >
            Статьи
          </button>
        </div>

        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={tab === 'products' ? 'Найти товар...' : 'Найти статью...'}
            className="w-full bg-secondary rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      <div className="px-5 py-4">
        {tab === 'products' ? (
          <div className="grid grid-cols-2 gap-3">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="h-28 bg-forest-light flex items-center justify-center text-4xl relative">
                  {product.image}
                  <button className="absolute top-2 right-2 w-7 h-7 bg-card/80 rounded-full flex items-center justify-center">
                    <Heart size={14} className="text-muted-foreground" />
                  </button>
                </div>
                <div className="p-3">
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                  <p className="text-sm font-bold mt-0.5 leading-tight">{product.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{product.weight}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm font-bold text-primary">{product.price} ₽</p>
                    <button className="w-7 h-7 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-lg font-bold">+</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl p-4 shadow-sm"
              >
                <div className="flex gap-3">
                  <div className="w-14 h-14 bg-forest-light rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {article.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-semibold text-primary bg-forest-light px-2 py-0.5 rounded-full">{article.category}</span>
                    <p className="text-sm font-bold mt-1 leading-tight">{article.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-1 mt-1.5 text-muted-foreground">
                      <BookOpen size={10} />
                      <span className="text-[10px]">{article.readTime} мин чтения</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground flex-shrink-0 mt-4" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
