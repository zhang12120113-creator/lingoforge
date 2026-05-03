import { useState, useEffect, useCallback } from 'react';

const DEFAULT_CONFIG = {
  soundEnabled: true,
  showTranslation: true,
  showPhonetic: true,
  dictationMode: false,
  wordRepeatCount: 1,
};

const VALID_THEMES = ['light', 'gray', 'star', 'warm'];

function loadInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = localStorage.getItem('lingoforge-theme');
    if (saved && VALID_THEMES.includes(saved)) return saved;
    // 旧版兼容：把以前的 theme=dark 迁移成 star，theme=light 保持 light
    const legacy = localStorage.getItem('theme');
    if (legacy === 'dark') return 'star';
    if (legacy === 'light') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'star' : 'light';
  } catch {
    return 'light';
  }
}

export function useUserConfig() {
  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('typingword_config');
      return saved ? { ...DEFAULT_CONFIG, ...JSON.parse(saved) } : DEFAULT_CONFIG;
    } catch { return DEFAULT_CONFIG; }
  });

  const [theme, setThemeState] = useState(loadInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'gray' || theme === 'star') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('lingoforge-theme', theme); } catch {}
  }, [theme]);

  const setTheme = useCallback((next) => {
    if (!VALID_THEMES.includes(next)) return;
    setThemeState(next);
  }, []);

  const updateConfig = (key, value) => {
    setConfig(prev => {
      const next = { ...prev, [key]: value };
      localStorage.setItem('typingword_config', JSON.stringify(next));
      return next;
    });
  };

  const toggleConfig = (key) => updateConfig(key, !config[key]);

  return { config, theme, setTheme, updateConfig, toggleConfig };
}
