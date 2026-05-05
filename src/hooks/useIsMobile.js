import { useState, useEffect } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const ua = navigator.userAgent.toLowerCase();
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
      // iPadOS 13+ 默认把 UA 伪装成 Mac,需要靠触控来识别(部分模式下 maxTouchPoints 仅为 1)
      const isIPadOS = ua.includes('mac') && navigator.maxTouchPoints >= 1;
      // 用短边判断,避免平板横屏宽度跨过 1024 阈值后被误判为桌面
      const shortSide = Math.min(window.innerWidth, window.innerHeight);
      const isSmallShortSide = shortSide < 1024;
      // 粗指针(手指/触控笔)的设备视为移动端;桌面带鼠标通常是 fine pointer
      const isCoarsePointer = typeof window.matchMedia === 'function'
        ? window.matchMedia('(pointer: coarse)').matches
        : false;

      // 手机/平板的移动 UA 直接判定为移动端;
      // 否则只要是触摸设备且(短边 < 1024 或粗指针),就走移动模式,
      // 这样平板横屏(长边 >= 1024)也能正确激活虚拟键盘
      setIsMobile(
        isMobileUA ||
        isIPadOS ||
        (isTouchDevice && (isSmallShortSide || isCoarsePointer))
      );
    };

    check();
    window.addEventListener('resize', check);
    window.addEventListener('orientationchange', check);
    return () => {
      window.removeEventListener('resize', check);
      window.removeEventListener('orientationchange', check);
    };
  }, []);

  return isMobile;
}
