export interface ReceptionPoint {
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  phone: string;
  hours: string;
  isOpen: boolean;
  acceptedItems: { name: string; price: number }[];
  notes?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  weight: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  image: string;
}

export interface Vacancy {
  id: string;
  title: string;
  city: string;
  type: 'seasonal' | 'permanent';
  schedule: string;
  salary: string;
  description: string;
  requirements: string[];
  conditions: string[];
}

export interface WalletTransaction {
  id: string;
  type: 'income' | 'withdrawal' | 'bonus';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'processing';
}

export const receptionPoints: ReceptionPoint[] = [
  { id: '1', name: 'Пункт "Лесной"', address: 'ул. Лесная 12', city: 'Архангельск', lat: 64.5401, lng: 40.5433, phone: '+7 921 111-11-11', hours: '8:00–18:00', isOpen: true, acceptedItems: [{ name: 'Черника', price: 220 }, { name: 'Брусника', price: 180 }, { name: 'Белый гриб', price: 450 }], notes: 'Минимум 5 кг' },
  { id: '2', name: 'Пункт "Урожай"', address: 'пр. Ломоносова 45', city: 'Архангельск', lat: 64.5500, lng: 40.5300, phone: '+7 921 222-22-22', hours: '7:00–20:00', isOpen: true, acceptedItems: [{ name: 'Черника', price: 230 }, { name: 'Морошка', price: 500 }, { name: 'Лисички', price: 350 }] },
  { id: '3', name: 'Пункт "Тайга"', address: 'ул. Северная 8', city: 'Вологда', lat: 59.2200, lng: 39.8900, phone: '+7 921 333-33-33', hours: '9:00–17:00', isOpen: false, acceptedItems: [{ name: 'Брусника', price: 190 }, { name: 'Клюква', price: 250 }], notes: 'Закрыт до сезона' },
  { id: '4', name: 'Пункт "Ягодка"', address: 'ул. Советская 23', city: 'Сыктывкар', lat: 61.6700, lng: 50.8400, phone: '+7 921 444-44-44', hours: '8:00–19:00', isOpen: true, acceptedItems: [{ name: 'Черника', price: 210 }, { name: 'Голубика', price: 300 }, { name: 'Подберёзовик', price: 280 }] },
  { id: '5', name: 'Пункт "Север"', address: 'ул. Мира 56', city: 'Петрозаводск', lat: 61.7849, lng: 34.3469, phone: '+7 921 555-55-55', hours: '7:00–18:00', isOpen: true, acceptedItems: [{ name: 'Морошка', price: 520 }, { name: 'Черника', price: 240 }, { name: 'Белый гриб', price: 480 }] },
  { id: '6', name: 'Приёмка "Грибник"', address: 'ул. Ленина 90', city: 'Кострома', lat: 57.7676, lng: 40.9269, phone: '+7 921 666-66-66', hours: '8:00–17:00', isOpen: true, acceptedItems: [{ name: 'Лисички', price: 320 }, { name: 'Опята', price: 200 }, { name: 'Подосиновик', price: 350 }] },
  { id: '7', name: 'Пункт "Дикорос"', address: 'пр. Победы 14', city: 'Великий Устюг', lat: 60.7600, lng: 46.3100, phone: '+7 921 777-77-77', hours: '9:00–16:00', isOpen: false, acceptedItems: [{ name: 'Брусника', price: 175 }, { name: 'Клюква', price: 240 }] },
  { id: '8', name: 'Пункт "Природа"', address: 'ул. Гагарина 3', city: 'Мурманск', lat: 68.9585, lng: 33.0827, phone: '+7 921 888-88-88', hours: '10:00–18:00', isOpen: true, acceptedItems: [{ name: 'Морошка', price: 550 }, { name: 'Черника', price: 250 }] },
  { id: '9', name: 'Пункт "Сезон"', address: 'ул. Кирова 67', city: 'Вельск', lat: 61.0700, lng: 42.1000, phone: '+7 921 999-99-99', hours: '7:00–19:00', isOpen: true, acceptedItems: [{ name: 'Черника', price: 215 }, { name: 'Брусника', price: 185 }, { name: 'Лисички', price: 340 }] },
  { id: '10', name: 'Пункт "Берёзка"', address: 'ул. Пушкина 41', city: 'Котлас', lat: 61.2500, lng: 46.6400, phone: '+7 921 100-10-10', hours: '8:00–17:00', isOpen: true, acceptedItems: [{ name: 'Голубика', price: 310 }, { name: 'Белый гриб', price: 460 }] },
];

export const products: Product[] = [
  { id: '1', name: 'Черника сушёная', category: 'Ягоды', price: 890, image: '🫐', description: 'Отборная черника, высушенная при низкой температуре', weight: '200 г' },
  { id: '2', name: 'Варенье из морошки', category: 'Варенья', price: 650, image: '🍯', description: 'Домашнее варенье из северной морошки', weight: '350 мл' },
  { id: '3', name: 'Грибы белые сушёные', category: 'Грибы', price: 1200, image: '🍄', description: 'Белые грибы ручного сбора', weight: '100 г' },
  { id: '4', name: 'Брусничный морс', category: 'Напитки', price: 320, image: '🥤', description: 'Натуральный морс из дикой брусники', weight: '500 мл' },
  { id: '5', name: 'Клюква замороженная', category: 'Ягоды', price: 450, image: '🔴', description: 'Быстрая заморозка, сохранён максимум витаминов', weight: '500 г' },
  { id: '6', name: 'Мёд лесной', category: 'Мёд', price: 780, image: '🍯', description: 'Мёд из лесного разнотравья Русского Севера', weight: '500 г' },
  { id: '7', name: 'Чай с иван-чаем', category: 'Напитки', price: 380, image: '🍵', description: 'Ферментированный иван-чай с ягодами', weight: '100 г' },
  { id: '8', name: 'Лисички маринованные', category: 'Грибы', price: 550, image: '🍄', description: 'Маринованные лисички по домашнему рецепту', weight: '400 мл' },
];

export const articles: Article[] = [
  { id: '1', title: 'Когда собирать чернику: полный гид', excerpt: 'Оптимальные сроки, признаки спелости и секреты опытных сборщиков', category: 'Гайды', readTime: 5, image: '📘' },
  { id: '2', title: 'Как правильно хранить дикоросы', excerpt: 'Заморозка, сушка, консервация — разбираем все способы', category: 'Советы', readTime: 7, image: '📦' },
  { id: '3', title: 'Польза морошки для здоровья', excerpt: 'Витамины, антиоксиданты и уникальные свойства северной ягоды', category: 'Здоровье', readTime: 4, image: '🧡' },
  { id: '4', title: 'Рецепт: пирог с черникой', excerpt: 'Простой и вкусный рецепт из свежих ягод', category: 'Рецепты', readTime: 3, image: '🥧' },
  { id: '5', title: 'Грибы Русского Севера: определитель', excerpt: 'Какие грибы безопасно собирать и как их отличить', category: 'Гайды', readTime: 10, image: '🍄' },
];

export const vacancies: Vacancy[] = [
  { id: '1', title: 'Приёмщик дикоросов', city: 'Архангельск', type: 'seasonal', schedule: 'Полный день', salary: 'от 45 000 ₽', description: 'Приёмка, сортировка и учёт ягод и грибов на пункте', requirements: ['Опыт работы от 1 года', 'Знание видов дикоросов', 'Ответственность'], conditions: ['Официальное оформление', 'Питание', 'Сезон: июнь–октябрь'] },
  { id: '2', title: 'Водитель-экспедитор', city: 'Вологда', type: 'seasonal', schedule: 'Вахта 15/15', salary: 'от 60 000 ₽', description: 'Перевозка дикоросов между пунктами приёма и складом', requirements: ['Категория B/C', 'Стаж от 3 лет', 'Знание региона'], conditions: ['Проживание', 'ГСМ компании', 'Премии'] },
  { id: '3', title: 'Менеджер по закупкам', city: 'Москва', type: 'permanent', schedule: 'Полный день', salary: 'от 80 000 ₽', description: 'Работа с поставщиками дикоросов, ценообразование, контроль качества', requirements: ['Опыт в закупках', 'Знание рынка дикоросов', 'Аналитические навыки'], conditions: ['Офис в центре', 'ДМС', 'Бонусы по KPI'] },
  { id: '4', title: 'Сборщик ягод', city: 'Петрозаводск', type: 'seasonal', schedule: 'Свободный', salary: 'Сдельная', description: 'Сбор черники и брусники в лесных угодьях', requirements: ['Физическая выносливость', 'Возраст от 18 лет'], conditions: ['Инвентарь предоставляется', 'Трансфер', 'Бонус за объём'] },
  { id: '5', title: 'Контролёр качества', city: 'Архангельск', type: 'permanent', schedule: 'Полный день', salary: 'от 50 000 ₽', description: 'Контроль качества принимаемой продукции на складе', requirements: ['Образование в пищевой промышленности', 'Внимательность'], conditions: ['Стабильный график', 'Соцпакет'] },
];

export const walletTransactions: WalletTransaction[] = [
  { id: '1', type: 'income', amount: 4600, description: 'Сдача: Черника 20 кг', date: '2026-02-20', status: 'completed' },
  { id: '2', type: 'income', amount: 2700, description: 'Сдача: Брусника 15 кг', date: '2026-02-18', status: 'completed' },
  { id: '3', type: 'bonus', amount: 500, description: 'Реферальный бонус', date: '2026-02-17', status: 'completed' },
  { id: '4', type: 'withdrawal', amount: -5000, description: 'Вывод на карту *4532', date: '2026-02-15', status: 'completed' },
  { id: '5', type: 'income', amount: 3200, description: 'Сдача: Лисички 10 кг', date: '2026-02-12', status: 'completed' },
  { id: '6', type: 'withdrawal', amount: -3000, description: 'Вывод СБП', date: '2026-02-10', status: 'processing' },
];
