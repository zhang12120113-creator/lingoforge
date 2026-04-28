import { useState, useEffect, useCallback } from 'react';

const DEFAULT_CONFIG = {
  soundEnabled: true,
  showTranslation: true,
  showPhonetic: true,
  dictationMode: false,
  wordRepeatCount: 1,
};

export function useUserConfig() {
  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('typingword_config');
      return saved ? { ...DEFAULT_CONFIG, ...JSON.parse(saved) } : DEFAULT_CONFIG;
    } catch { return DEFAULT_CONFIG; }
  });

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    console.log('darkMode changed:', darkMode);
  }, [darkMode]);

  const updateConfig = (key, value) => {
    setConfig(prev => {
      const next = { ...prev, [key]: value };
      localStorage.setItem('typingword_config', JSON.stringify(next));
      return next;
    });
  };

  const toggleConfig = (key) => updateConfig(key, !config[key]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  return { config, darkMode, updateConfig, toggleConfig, toggleDarkMode };
}
