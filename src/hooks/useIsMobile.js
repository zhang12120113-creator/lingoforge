import { useState, useEffect } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const ua = navigator.userAgent.toLowerCase();
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
      // iPadOS 13+ 默认把 UA 伪装成 Mac,需要靠多点触控来识别
      const isIPadOS = ua.includes('mac') && navigator.maxTouchPoints > 1;
      const isSmallScreen = window.innerWidth < 1024;

      // 手机/平板的移动 UA 直接判定为移动端,横竖屏都生效;
      // 桌面触屏笔记本(无移动 UA)仅在小屏时才走移动模式,避免误判
      setIsMobile(isMobileUA || isIPadOS || (isTouchDevice && isSmallScreen));
    };

    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile;
}
