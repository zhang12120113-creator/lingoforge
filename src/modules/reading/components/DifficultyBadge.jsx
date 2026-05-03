const DIFFICULTY_STYLE = {
  beginner: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  intermediate: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
  advanced: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
};

const DIFFICULTY_TEXT = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '高级',
};

export default function DifficultyBadge({ difficulty }) {
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${DIFFICULTY_STYLE[difficulty]}`}>
      {DIFFICULTY_TEXT[difficulty]}
    </span>
  );
}
