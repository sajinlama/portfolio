"use client";

import React, { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const chars = "ゲームオーバープレイヤーコンティニューファイナルステージ0123456789";
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Speed Control Settings
    const fps = 22; // Lower = slower, smooth retro crawl (try 18 - 25)
    const interval = 1000 / fps;
    let lastTime = 0;

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // Trailing fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#10b981"; // Emerald-500
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Reset to top when off screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      <canvas ref={canvasRef} className="block w-full h-full opacity-60" />
      {/* CRT Scanline & vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
    </div>
  );
}