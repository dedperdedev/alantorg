# Деплой alantorg на GitHub Pages

## Что сделано

1. **`vite.config.ts`** — добавлен `base: "/alantorg/"`, чтобы скрипты и стили подгружались с правильного пути.
2. **`.github/workflows/deploy.yml`** — workflow собирает проект и публикует папку `dist` на GitHub Pages.

## Что нужно сделать тебе

### 1. Перенести файлы в репозиторий

Если репозиторий клонирован в другое место:

- Скопируй **`vite.config.ts`** в корень репо (замени существующий).
- Скопируй папку **`.github/workflows/`** в корень репо (файл `deploy.yml` внутри).

Либо клонируй репо в эту папку и замени там `vite.config.ts` и добавь `.github/workflows/deploy.yml`.

### 2. Включить GitHub Pages в настройках репозитория

1. Открой: **https://github.com/dedperdedev/alantorg** → **Settings** → **Pages**.
2. В блоке **Build and deployment**:
   - **Source**: выбери **GitHub Actions**.

После пуша в `main` workflow сам соберёт проект и задеплоит его.

### 3. Проверить результат

- Сайт будет доступен по адресу: **https://dedperdedev.github.io/alantorg/**
- После первого деплоя подожди 1–2 минуты и обнови страницу.

## Локальная проверка перед пушем

```bash
npm install
npm run build
npm run preview
```

В браузере открой указанный адрес (обычно `http://localhost:4173/alantorg/`) и убедись, что приложение открывается без ошибок.
