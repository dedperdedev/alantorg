import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cloud, CloudRain, Sun, CloudSnow, Droplets, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const GOMEL_LAT = 52.4345;
const GOMEL_LON = 30.9754;
const WEATHER_CITY = 'Гомель';

function getWeatherLabel(code: number): string {
  if (code === 0) return 'Ясно';
  if (code <= 3) return 'Облачно';
  if (code === 45 || code === 48) return 'Туман';
  if (code >= 51 && code <= 67) return 'Дождь';
  if (code >= 71 && code <= 77) return 'Снег';
  if (code >= 80 && code <= 82) return 'Ливень';
  if (code >= 85 && code <= 86) return 'Снегопад';
  if (code >= 95) return 'Гроза';
  return 'Облачно';
}

function getWeatherIcon(code: number) {
  if (code === 0) return Sun;
  if (code >= 71 && code <= 86) return CloudSnow;
  if ((code >= 51 && code <= 82) || code >= 95) return CloudRain;
  return Cloud;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
}

interface WeatherData {
  current: {
    temperature_2m: number;
    weather_code: number;
    relative_humidity_2m?: number;
    wind_speed_10m?: number;
    precipitation?: number;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
}

const WeatherPage = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${GOMEL_LAT}&longitude=${GOMEL_LON}&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m,precipitation&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Europe/Minsk&forecast_days=5`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json?.current && json?.daily) {
          setData({
            current: json.current,
            daily: json.daily,
          });
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pb-24 flex items-center justify-center">
        <p className="text-muted-foreground">Загрузка погоды…</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen pb-24 px-5 pt-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold">
          <ArrowLeft size={18} /> На главную
        </Link>
        <p className="mt-6 text-muted-foreground">Не удалось загрузить погоду. Попробуйте позже.</p>
      </div>
    );
  }

  const { current, daily } = data;
  const temp = Math.round(current.temperature_2m);
  const tempStr = `${temp > 0 ? '+' : ''}${temp}°C`;
  const WeatherIcon = getWeatherIcon(current.weather_code);

  return (
    <div className="min-h-screen pb-24">
      <div className="bg-gradient-to-br from-sky-500 to-sky-700 px-5 pt-12 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="p-2 bg-white/20 rounded-xl" title="На главную">
            <ArrowLeft size={18} className="text-white" />
          </Link>
          <h1 className="text-white text-lg font-bold">Погода</h1>
          <div className="w-10" />
        </div>

        <p className="text-white/80 text-sm mb-4">{WEATHER_CITY}</p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <WeatherIcon size={32} className="text-white" />
            </div>
            <div>
              <p className="text-white text-3xl font-bold">{tempStr}</p>
              <p className="text-white/90 text-sm mt-0.5">{getWeatherLabel(current.weather_code)}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/20">
            {current.relative_humidity_2m != null && (
              <div className="flex items-center gap-2">
                <Droplets size={18} className="text-white/80" />
                <span className="text-white/90 text-sm">Влажность {current.relative_humidity_2m}%</span>
              </div>
            )}
            {current.wind_speed_10m != null && (
              <div className="flex items-center gap-2">
                <Wind size={18} className="text-white/80" />
                <span className="text-white/90 text-sm">Ветер {current.wind_speed_10m} км/ч</span>
              </div>
            )}
            {current.precipitation != null && current.precipitation > 0 && (
              <div className="flex items-center gap-2">
                <CloudRain size={18} className="text-white/80" />
                <span className="text-white/90 text-sm">Осадки {current.precipitation} мм</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-base font-bold mb-3">Прогноз на 5 дней</h2>
        <div className="space-y-2">
          {daily.time.slice(0, 5).map((date, i) => {
            const Icon = getWeatherIcon(daily.weather_code[i] ?? 3);
            const max = daily.temperature_2m_max[i];
            const min = daily.temperature_2m_min[i];
            return (
              <motion.div
                key={date}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-card border border-border rounded-2xl p-4"
              >
                <Icon size={24} className="text-primary shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{formatDate(date)}</p>
                  <p className="text-xs text-muted-foreground">{getWeatherLabel(daily.weather_code[i] ?? 3)}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{max > 0 ? '+' : ''}{Math.round(max)}°</p>
                  <p className="text-xs text-muted-foreground">{min > 0 ? '+' : ''}{Math.round(min)}°</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
