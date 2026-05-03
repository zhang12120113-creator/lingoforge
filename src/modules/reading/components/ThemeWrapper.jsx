import { useUserConfig } from '../../../hooks/useUserConfig';

/**
 * 阅读模块主题适配 Hook
 * 注意：本项目没有 ThemeContext，主题状态由 useUserConfig 管理。
 * 此 Hook 仅用于阅读模块内部的样式分支选择，不修改全局主题逻辑。
 */
export const useReadingTheme = () => {
  const { theme } = useUserConfig();

  const isDark = theme === 'gray' || theme === 'star';

  const bg = {
    light: 'bg-white',
    gray: 'bg-gray-900',
    star: 'bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]',
    warm: 'bg-[#faf7f0]',
  }[theme] || 'bg-white';

  const text = {
    light: 'text-gray-900',
    gray: 'text-gray-100',
    star: 'text-white',
    warm: 'text-gray-900',
  }[theme] || 'text-gray-900';

  const cardBg = {
    light: 'bg-white border-gray-200',
    gray: 'bg-gray-800 border-gray-700',
    star: 'bg-white/10 border-white/10 backdrop-blur-sm',
    warm: 'bg-white border-gray-200',
  }[theme] || 'bg-white border-gray-200';

  const mutedText = {
    light: 'text-gray-500',
    gray: 'text-gray-400',
    star: 'text-gray-300',
    warm: 'text-gray-500',
  }[theme] || 'text-gray-500';

  const inputBg = {
    light: 'bg-gray-100 border-gray-300',
    gray: 'bg-gray-800 border-gray-600',
    star: 'bg-white/10 border-white/20',
    warm: 'bg-gray-100 border-gray-300',
  }[theme] || 'bg-gray-100 border-gray-300';

  return { theme, isDark, bg, text, cardBg, mutedText, inputBg };
};

export const ThemeWrapper = ({ children, className = '' }) => {
  const { bg, text } = useReadingTheme();
  return <div className={`min-h-screen ${bg} ${text} ${className}`}>{children}</div>;
};
