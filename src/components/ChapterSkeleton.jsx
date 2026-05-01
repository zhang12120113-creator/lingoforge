import React from 'react';

const ChapterSkeleton = React.memo(function ChapterSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 animate-pulse">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-gray-200 bg-gray-100 p-4 dark:border-gray-700 dark:bg-gray-800 h-24"
        >
          <div className="h-4 w-16 rounded bg-gray-300 dark:bg-gray-600" />
          <div className="mt-3 h-3 w-12 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      ))}
    </div>
  );
});

export default ChapterSkeleton;
