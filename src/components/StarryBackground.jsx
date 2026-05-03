import { useEffect, useRef, useState } from 'react';

function StarryBackground() {
  const canvasRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'light';
    return document.documentElement.getAttribute('data-theme') || 'light';
  });

  useEffect(() => {
    const read = () => setTheme(document.documentElement.getAttribute('data-theme') || 'light');
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (theme !== 'star') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let stars = [];
    let constellations = [];
    let shootingStars = [];
    let nextShootingStarTime = 0;
    let nebulaCanvas = null;
    let isRunning = true;
    let resizeTimer = null;
    let glowCanvases = {};

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initGlowCanvases();
      drawNebula();
    }

    function throttledResize() {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    }

    function initStars() {
      stars = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 5500), 250);
      for (let i = 0; i < count; i++) {
        const rand = Math.random();
        let color;
        if (rand > 0.88) {
          color = [129, 140, 248, Math.random() * 0.5 + 0.4];
        } else if (rand > 0.72) {
          color = [165, 180, 252, Math.random() * 0.5 + 0.35];
        } else if (rand > 0.55) {
          color = [196, 181, 253, Math.random() * 0.4 + 0.3];
        } else {
          color = [255, 255, 255, Math.random() * 0.7 + 0.4];
        }
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.8 + 0.4,
          alpha: Math.random() * 0.5 + 0.5,
          speed: Math.random() * 0.008 + 0.002,
          twinklePhase: Math.random() * Math.PI * 2,
          color,
        });
      }
      computeConstellations();
    }

    function computeConstellations() {
      constellations = [];
      const maxDist = 140;
      for (let i = 0; i < stars.length; i++) {
        const neighbors = [];
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            neighbors.push({ idx: j, dist });
          }
        }
        neighbors.sort((a, b) => a.dist - b.dist);
        for (let k = 0; k < Math.min(3, neighbors.length); k++) {
          const n = neighbors[k];
          const alpha = (1 - n.dist / maxDist) * 0.1;
          constellations.push({
            i,
            j: n.idx,
            alpha,
            color: midColor(stars[i].color, stars[n.idx].color),
          });
        }
      }
    }

    function createGlowCanvas(r, g, b) {
      const size = 64;
      const c = document.createElement('canvas');
      c.width = size;
      c.height = size;
      const gctx = c.getContext('2d');
      const grad = gctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      grad.addColorStop(0, `rgba(${r},${g},${b},1)`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      gctx.fillStyle = grad;
      gctx.fillRect(0, 0, size, size);
      return c;
    }

    function initGlowCanvases() {
      glowCanvases = {};
      const colors = [
        [129, 140, 248],
        [165, 180, 252],
        [196, 181, 253],
        [255, 255, 255],
      ];
      for (const [r, g, b] of colors) {
        glowCanvases[`${r},${g},${b}`] = createGlowCanvas(r, g, b);
      }
    }

    function midColor(a, b) {
      return [
        Math.round((a[0] + b[0]) / 2),
        Math.round((a[1] + b[1]) / 2),
        Math.round((a[2] + b[2]) / 2),
      ];
    }

    function drawNebula() {
      nebulaCanvas = document.createElement('canvas');
      nebulaCanvas.width = canvas.width;
      nebulaCanvas.height = canvas.height;
      const nctx = nebulaCanvas.getContext('2d');

      const nebulas = [
        { x: 0.2, y: 0.3, r: 0.6, stops: [['rgba(99,102,241,0.04)', 0], ['rgba(129,140,248,0.02)', 0.5], ['rgba(129,140,248,0)', 1]] },
        { x: 0.8, y: 0.7, r: 0.5, stops: [['rgba(139,92,246,0.035)', 0], ['rgba(139,92,246,0)', 1]] },
        { x: 0.5, y: 0.15, r: 0.45, stops: [['rgba(196,181,253,0.03)', 0], ['rgba(196,181,253,0)', 1]] },
        { x: 0.15, y: 0.85, r: 0.4, stops: [['rgba(244,162,97,0.025)', 0], ['rgba(244,162,97,0)', 1]] },
      ];

      for (const nb of nebulas) {
        const grad = nctx.createRadialGradient(
          canvas.width * nb.x, canvas.height * nb.y, 0,
          canvas.width * nb.x, canvas.height * nb.y, canvas.width * nb.r
        );
        for (const [color, offset] of nb.stops) {
          grad.addColorStop(offset, color);
        }
        nctx.fillStyle = grad;
        nctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        if (Math.random() > 0.5) {
          this.x = Math.random() * canvas.width;
          this.y = -60;
        } else {
          this.x = -60;
          this.y = Math.random() * canvas.height * 0.5;
        }
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.4;
        this.speed = 8 + Math.random() * 8;
        this.length = 60 + Math.random() * 80;
        this.thickness = 1 + Math.random() * 1.5;
        this.opacity = 0.8 + Math.random() * 0.2;
        this.active = true;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity -= 0.012;
        if (this.opacity <= 0 || this.x > canvas.width + 100 || this.y > canvas.height + 100) {
          this.active = false;
        }
      }

      draw() {
        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;

        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = 'rgba(255,255,255,1)';
        ctx.lineWidth = this.thickness;
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.thickness * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,1)';
        ctx.fill();

        const glowImg = glowCanvases['255,255,255'];
        if (glowImg) {
          const glowR = this.thickness * 6;
          ctx.globalAlpha = this.opacity * 0.3;
          ctx.drawImage(glowImg, this.x - glowR, this.y - glowR, glowR * 2, glowR * 2);
        }
        ctx.globalAlpha = 1;
      }
    }

    function draw() {
      if (!isRunning) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (nebulaCanvas) {
        ctx.drawImage(nebulaCanvas, 0, 0);
      }

      const now = performance.now();

      // Constellation lines
      for (const c of constellations) {
        const s1 = stars[c.i];
        const s2 = stars[c.j];
        ctx.beginPath();
        ctx.moveTo(s1.x, s1.y);
        ctx.lineTo(s2.x, s2.y);
        ctx.strokeStyle = `rgba(${c.color[0]},${c.color[1]},${c.color[2]},${c.alpha.toFixed(3)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Stars
      for (const star of stars) {
        const twinkle = Math.sin(now * star.speed + star.twinklePhase) * 0.3 + 0.7;
        const alpha = star.alpha * twinkle;
        const [r, g, b] = star.color;

        // Soft glow
        if (star.radius > 0.7) {
          const glowR = star.radius * 5;
          const glowImg = glowCanvases[`${r},${g},${b}`];
          if (glowImg) {
            ctx.globalAlpha = alpha * 0.25;
            ctx.drawImage(glowImg, star.x - glowR, star.y - glowR, glowR * 2, glowR * 2);
            ctx.globalAlpha = 1;
          }
        }

        // Core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.fill();

        // Cross rays for bright stars
        if (star.radius > 1.2) {
          const rayLen = star.radius * 5;
          ctx.beginPath();
          ctx.moveTo(star.x - rayLen, star.y);
          ctx.lineTo(star.x + rayLen, star.y);
          ctx.moveTo(star.x, star.y - rayLen);
          ctx.lineTo(star.x, star.y + rayLen);
          ctx.strokeStyle = `rgba(${r},${g},${b},${(alpha * 0.25).toFixed(3)})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }

      // Shooting stars
      if (now > nextShootingStarTime) {
        shootingStars.push(new ShootingStar());
        nextShootingStarTime = now + 3000 + Math.random() * 6000;
      }

      shootingStars = shootingStars.filter(s => s.active);
      for (const s of shootingStars) {
        s.update();
        if (s.active) s.draw();
      }

      animationId = requestAnimationFrame(draw);
    }

    function handleVisibility() {
      if (document.hidden) {
        isRunning = false;
        if (animationId) cancelAnimationFrame(animationId);
      } else {
        isRunning = true;
        nextShootingStarTime = performance.now() + 2000 + Math.random() * 4000;
        animationId = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();

    window.addEventListener('resize', throttledResize);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      window.removeEventListener('resize', throttledResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      if (resizeTimer) clearTimeout(resizeTimer);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  if (theme === 'gray') return null;

  if (theme !== 'star') {
    if (theme === 'warm') {
      return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#D9A87C]/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#C28E5C]/15 rounded-full blur-[60px]" />
          <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-[#E8B98A]/15 rounded-full blur-[40px]" />
        </div>
      );
    }
    return (
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[60px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[40px]" />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
}

export default StarryBackground;
