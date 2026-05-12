import { useNavigate } from 'react-router-dom';

const features = [
  { icon: '⌨️', title: '打字记忆', desc: '手指动起来，单词记得牢', path: '/word' },
  { icon: '📖', title: '阅读', desc: '沉浸阅读，逐句精听', path: '/reading' },
  { icon: '📺', title: '语料中心', desc: '视频语料，沉浸学习', path: '/listening' },
  { icon: '🎯', title: '训练中心', desc: '专项训练，全面提升', path: '/training' },
];

function scrollToWordbooks() {
  const element = document.getElementById('wordbooks');
  if (element) {
    const offset = 80;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Features() {
  const navigate = useNavigate();

  const handleClick = (feature) => {
    if (feature.path === '/word') {
      scrollToWordbooks();
    } else {
      navigate(feature.path);
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              onClick={() => handleClick(f)}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
