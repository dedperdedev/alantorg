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
  { id: '1', name: 'Пункт "Полесье"', address: 'ул. Ленина 15', city: 'Петриков', lat: 52.1283, lng: 28.4917, phone: '+375 29 111-11-11', hours: '8:00–18:00', isOpen: true, acceptedItems: [{ name: 'Черника', price: 5.50 }, { name: 'Брусника', price: 4.00 }, { name: 'Белый гриб', price: 12.00 }], notes: 'Минимум 5 кг' },
  { id: '2', name: 'Пункт "Урожай"', address: 'ул. Советская 32', city: 'Петриков', lat: 52.1310, lng: 28.5000, phone: '+375 29 222-22-22', hours: '7:00–20:00', isOpen: true, acceptedItems: [{ name: 'Черника', price: 5.80 }, { name: 'Морошка', price: 14.00 }, { name: 'Лисички', price: 8.00 }] },
  { id: '3', name: 'Пункт "Припять"', address: 'ул. Калинина 8', city: 'Мозырь', lat: 52.0483, lng: 29.2456, phone: '+375 29 333-33-33', hours: '9:00–17:00', isOpen: false, acceptedItems: [{ name: 'Брусника', price: 4.50 }, { name: 'Клюква', price: 6.00 }], notes: 'Закрыт до сезона' },
  { id: '4', name: 'Пункт "Ягодка"', address: 'ул. Гагарина 23', city: 'Гомель', lat: 52.4345, lng: 30.9754, phone: '+375 29 444-44-44', hours: '8:00–19:00', isOpen: true, acceptedItems: [{ name: 'Черника', price: 5.20 }, { name: 'Голубика', price: 7.50 }, { name: 'Подберёзовик', price: 6.50 }] },
  { id: '5', name: 'Пункт "Лесовик"', address: 'пр. Октября 56', city: 'Гомель', lat: 52.4240, lng: 30.9510, phone: '+375 29 555-55-55', hours: '7:00–18:00', isOpen: true, acceptedItems: [{ name: 'Морошка', price: 15.00 }, { name: 'Черника', price: 6.00 }, { name: 'Белый гриб', price: 13.00 }] },
  { id: '6', name: 'Приёмка "Грибник"', address: 'ул. Первомайская 90', city: 'Речица', lat: 52.3617, lng: 30.3933, phone: '+375 29 666-66-66', hours: '8:00–17:00', isOpen: true, acceptedItems: [{ name: 'Лисички', price: 7.50 }, { name: 'Опята', price: 4.50 }, { name: 'Подосиновик', price: 9.00 }] },
  { id: '7', name: 'Пункт "Дикорос"', address: 'ул. Победы 14', city: 'Жлобин', lat: 52.8917, lng: 30.0250, phone: '+375 29 777-77-77', hours: '9:00–16:00', isOpen: false, acceptedItems: [{ name: 'Брусника', price: 3.80 }, { name: 'Клюква', price: 5.50 }] },
  { id: '8', name: 'Пункт "Природа"', address: 'ул. Мира 3', city: 'Калинковичи', lat: 52.1283, lng: 29.3267, phone: '+375 29 888-88-88', hours: '10:00–18:00', isOpen: true, acceptedItems: [{ name: 'Морошка', price: 14.50 }, { name: 'Черника', price: 5.70 }] },
  { id: '9', name: 'Пункт "Сезон"', address: 'ул. Кирова 67', city: 'Светлогорск', lat: 52.6300, lng: 29.7400, phone: '+375 29 999-99-99', hours: '7:00–19:00', isOpen: true, acceptedItems: [{ name: 'Черника', price: 5.40 }, { name: 'Брусника', price: 4.20 }, { name: 'Лисички', price: 8.50 }] },
  { id: '10', name: 'Пункт "Берёзка"', address: 'ул. Пушкина 41', city: 'Добруш', lat: 52.4083, lng: 31.3250, phone: '+375 29 100-10-10', hours: '8:00–17:00', isOpen: true, acceptedItems: [{ name: 'Голубика', price: 8.00 }, { name: 'Белый гриб', price: 12.50 }] },
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
  { id: '9', name: 'Гребёнка для ягод', category: 'Инвентарь', price: 280, image: '🪮', description: 'Удобная гребёнка для быстрого сбора черники и брусники', weight: '1 шт' },
  { id: '10', name: 'Ведро для сбора', category: 'Инвентарь', price: 450, image: '🪣', description: 'Пластиковое ведро 10 л для похода за ягодами и грибами', weight: '10 л' },
  { id: '11', name: 'Ручные весы', category: 'Инвентарь', price: 520, image: '⚖️', description: 'Карманные пружинные весы до 5 кг для взвешивания на месте', weight: 'до 5 кг' },
  { id: '12', name: 'Резиновые сапоги', category: 'Инвентарь', price: 890, image: '👢', description: 'Высокие сапоги для сбора в сырых местах и после дождя', weight: '1 пара' },
  { id: '13', name: 'Дождевик', category: 'Инвентарь', price: 420, image: '🧥', description: 'Лёгкий дождевик с капюшоном, удобно брать в рюкзак', weight: '1 шт' },
  { id: '14', name: 'Средства от комаров, мошек и москитов', category: 'Инвентарь', price: 380, image: '🦟', description: 'Спрей или крем для защиты от комаров, мошек и москитов в лесу', weight: '100 мл' },
  { id: '15', name: 'Термобельё', category: 'Инвентарь', price: 720, image: '👕', description: 'Термобельё для прохладной погоды, комфортно на сборе в лесу', weight: '1 комплект' },
];

export const articles: Article[] = [
  { id: '1', title: 'Когда собирать чернику: полный гид', excerpt: 'Оптимальные сроки, признаки спелости и секреты опытных сборщиков', category: 'Гайды', readTime: 5, image: '📘' },
  { id: '2', title: 'Как правильно хранить дикоросы', excerpt: 'Заморозка, сушка, консервация — разбираем все способы', category: 'Советы', readTime: 7, image: '📦' },
  { id: '3', title: 'Польза морошки для здоровья', excerpt: 'Витамины, антиоксиданты и уникальные свойства северной ягоды', category: 'Здоровье', readTime: 4, image: '🧡' },
  { id: '4', title: 'Рецепт: пирог с черникой', excerpt: 'Простой и вкусный рецепт с хрустящей корочкой из свежих ягод', category: 'Рецепты', readTime: 3, image: '🥧' },
  { id: '5', title: 'Грибы Полесья: определитель', excerpt: 'Какие грибы безопасно собирать и как их отличить', category: 'Гайды', readTime: 10, image: '🍄' },
  { id: '6', title: 'Рецепт: варенье из брусники', excerpt: 'Классический рецепт брусничного варенья с минимумом сахара', category: 'Рецепты', readTime: 4, image: '🍯' },
  { id: '7', title: 'Рецепт: крем-суп из лисичек', excerpt: 'Нежный суп из свежих лисичек со сливками и зеленью', category: 'Рецепты', readTime: 5, image: '🍲' },
  { id: '8', title: 'Рецепт: морс из клюквы', excerpt: 'Освежающий витаминный морс — готовится за 15 минут', category: 'Рецепты', readTime: 2, image: '🥤' },
  { id: '9', title: 'Рецепт: маринованные опята', excerpt: 'Хрустящие маринованные опята на зиму по бабушкиному рецепту', category: 'Рецепты', readTime: 6, image: '🫙' },
  { id: '10', title: 'Рецепт: смузи с голубикой', excerpt: 'Полезный завтрак за 5 минут — голубика, банан и йогурт', category: 'Рецепты', readTime: 2, image: '🫐' },
  { id: '11', title: 'Советы: как собирать грибы безопасно', excerpt: 'Правила, которые спасут от отравления и помогут набрать корзину', category: 'Советы', readTime: 6, image: '🧺' },
  { id: '12', title: 'Рецепт: черничный чизкейк без выпечки', excerpt: 'Лёгкий десерт из свежей черники — не нужна духовка', category: 'Рецепты', readTime: 4, image: '🍰' },
];

export const vacancies: Vacancy[] = [
  { id: '1', title: 'Приёмщик дикоросов', city: 'Петриков', type: 'seasonal', schedule: 'Полный день', salary: 'от 45 000 Br', description: 'Приёмка, сортировка и учёт ягод и грибов на пункте', requirements: ['Опыт работы от 1 года', 'Знание видов дикоросов', 'Ответственность'], conditions: ['Официальное оформление', 'Питание', 'Сезон: июнь–октябрь'] },
  { id: '2', title: 'Водитель-экспедитор', city: 'Мозырь', type: 'seasonal', schedule: 'Вахта 15/15', salary: 'от 60 000 Br', description: 'Перевозка дикоросов между пунктами приёма и складом', requirements: ['Категория B/C', 'Стаж от 3 лет', 'Знание региона'], conditions: ['Проживание', 'ГСМ компании', 'Премии'] },
  { id: '3', title: 'Менеджер по закупкам', city: 'Минск', type: 'permanent', schedule: 'Полный день', salary: 'от 80 000 Br', description: 'Работа с поставщиками дикоросов, ценообразование, контроль качества', requirements: ['Опыт в закупках', 'Знание рынка дикоросов', 'Аналитические навыки'], conditions: ['Офис в центре', 'ДМС', 'Бонусы по KPI'] },
  { id: '4', title: 'Сборщик ягод', city: 'Брест', type: 'seasonal', schedule: 'Свободный', salary: 'Сдельная', description: 'Сбор черники и брусники в лесных угодьях', requirements: ['Физическая выносливость', 'Возраст от 18 лет'], conditions: ['Инвентарь предоставляется', 'Трансфер', 'Бонус за объём'] },
  { id: '5', title: 'Контролёр качества', city: 'Гомель', type: 'permanent', schedule: 'Полный день', salary: 'от 50 000 Br', description: 'Контроль качества принимаемой продукции на складе', requirements: ['Образование в пищевой промышленности', 'Внимательность'], conditions: ['Стабильный график', 'Соцпакет'] },
];

export const walletTransactions: WalletTransaction[] = [
  { id: '1', type: 'income', amount: 4600, description: 'Сдача: Черника 20 кг', date: '2026-02-20', status: 'completed' },
  { id: '2', type: 'income', amount: 2700, description: 'Сдача: Брусника 15 кг', date: '2026-02-18', status: 'completed' },
  { id: '3', type: 'bonus', amount: 0.5, description: 'Бонус за друга', date: '2026-02-17', status: 'completed' },
  { id: '4', type: 'withdrawal', amount: -5000, description: 'Вывод на карту *4532', date: '2026-02-15', status: 'completed' },
  { id: '5', type: 'income', amount: 3200, description: 'Сдача: Лисички 10 кг', date: '2026-02-12', status: 'completed' },
  { id: '6', type: 'withdrawal', amount: -3000, description: 'Вывод СБП', date: '2026-02-10', status: 'processing' },
];
