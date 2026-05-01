import React, { memo, useMemo, useRef } from 'react';

const WordDisplay = memo(function WordDisplay({ word, currentInput, isWrong }) {
  const chars = useMemo(() => word?.name?.split('') || [], [word?.name]);
  const prevLenRef = useRef(0);

  // 追踪输入长度变化，用于正确字符 pop 动画
  const newCorrectIndex = currentInput.length > prevLenRef.current ? currentInput.length - 1 : -1;
  prevLenRef.current = currentInput.length;

  return (
    <div className={`text-5xl sm:text-6xl md:text-8xl font-mono tracking-[0.15em] flex gap-1 justify-center select-none ${isWrong ? 'animate-shake' : ''}`}>
      {chars.map((char, i) => {
        let className;
        const isCorrect = i < currentInput.length && currentInput[i] === char;
        const isError = i < currentInput.length && currentInput[i] !== char;

        if (isCorrect) {
          className = 'text-primary dark:text-primary-dark dark:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]';
        } else if (isError) {
          className = 'text-violet-500 dark:text-violet-400 dark:drop-shadow-[0_0_6px_rgba(139,92,246,0.4)]';
        } else {
          className = 'text-gray-300 dark:text-gray-600';
        }

        const shouldPop = isCorrect && i === newCorrectIndex;

        return (
          <span
            key={i}
            className={`${className} ${shouldPop ? 'animate-char-pop' : ''} transition-colors duration-75 inline-block`}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
});

export default WordDisplay;
