import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

export const VirtualList = forwardRef(function VirtualList(
  { items, renderItem, estimateSize = 50, overscan = 5, className = '' },
  ref
) {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateSize,
    overscan,
  });

  useImperativeHandle(
    ref,
    () => ({
      scrollToIndex: (index, options) =>
        virtualizer.scrollToIndex(index, options),
      scrollToOffset: (offset, options) =>
        virtualizer.scrollToOffset(offset, options),
      getScrollOffset: () => parentRef.current?.scrollTop ?? 0,
    }),
    [virtualizer]
  );

  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();

  return (
    <div ref={parentRef} className={`overflow-y-auto ${className}`}>
      <div
        style={{
          height: `${totalSize}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualItems.map((virtualRow) => (
          <div
            key={virtualRow.key}
            data-index={virtualRow.index}
            ref={virtualizer.measureElement}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            {renderItem(items[virtualRow.index], virtualRow.index)}
          </div>
        ))}
      </div>
    </div>
  );
});

export default VirtualList;
