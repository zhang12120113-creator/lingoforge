// 多数主题样式由 [data-theme="..."] 选择器在 index.css 中通过 CSS 变量与覆盖规则驱动；
// 此 helper 仅在组件需要显式分支 className 时使用。
const TABLE = {
  light: {
    bgPage: 'bg-white',
    bgCard: 'bg-white',
    bgToolbar: 'bg-white/80',
    textMain: 'text-gray-900',
    textSub: 'text-gray-500',
    border: 'border-gray-200',
    accent: 'text-indigo-600',
  },
  gray: {
    bgPage: 'bg-gray-900',
    bgCard: 'bg-gray-800',
    bgToolbar: 'bg-gray-900/80',
    textMain: 'text-gray-100',
    textSub: 'text-gray-400',
    border: 'border-gray-700',
    accent: 'text-indigo-400',
  },
  star: {
    bgPage: 'bg-slate-950',
    bgCard: 'bg-slate-800',
    bgToolbar: 'bg-slate-950/80',
    textMain: 'text-white',
    textSub: 'text-gray-400',
    border: 'border-slate-700',
    accent: 'text-indigo-400',
  },
  warm: {
    bgPage: 'bg-[#F5F0EB]',
    bgCard: 'bg-[#FFFBF7]',
    bgToolbar: 'bg-[#F5F0EB]/80',
    textMain: 'text-[#2C2C2C]',
    textSub: 'text-[#6B6B6B]',
    border: 'border-[#E5E0DB]',
    accent: 'text-[#8B5E3C]',
  },
};

export const getThemeClasses = (theme) => TABLE[theme] || TABLE.light;
