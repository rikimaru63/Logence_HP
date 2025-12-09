"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

interface FloatingParticlesProps {
  particleCount?: number;
  className?: string;
}

export function FloatingParticles({
  particleCount = 50,
  className = "",
}: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const rect = canvas.getBoundingClientRect();
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        hue: 220 + Math.random() * 60, // Blue to purple range
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      }));
    };

    initParticles();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Draw infinity symbol path (∞)
    const drawInfinityPath = (
      ctx: CanvasRenderingContext2D,
      centerX: number,
      centerY: number,
      size: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      ctx.beginPath();

      for (let t = 0; t < Math.PI * 2; t += 0.1) {
        const scale = size / (3 + Math.sin(t) ** 2);
        const x = scale * Math.cos(t);
        const y = (scale * Math.sin(t) * Math.cos(t)) / 1.5;
        if (t === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw and update particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.pulse += particle.pulseSpeed;

        // Mouse interaction - gentle attraction
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const force = (150 - distance) / 150 * 0.02;
            particle.speedX += (dx / distance) * force;
            particle.speedY += (dy / distance) * force;
          }
        }

        // Apply friction
        particle.speedX *= 0.99;
        particle.speedY *= 0.99;

        // Wrap around edges
        if (particle.x < -10) particle.x = rect.width + 10;
        if (particle.x > rect.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = rect.height + 10;
        if (particle.y > rect.height + 10) particle.y = -10;

        // Pulsing opacity
        const pulseOpacity = particle.opacity * (0.7 + 0.3 * Math.sin(particle.pulse));

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${pulseOpacity})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 60%, 50%, ${pulseOpacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 50%, 40%, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 70%, ${pulseOpacity})`;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw subtle infinity symbols floating
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const x = rect.width * (0.2 + i * 0.3) + Math.sin(time + i) * 30;
        const y = rect.height * 0.5 + Math.cos(time * 0.7 + i) * 50;
        const opacity = 0.03 + 0.02 * Math.sin(time + i * 2);

        ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
        ctx.lineWidth = 1;
        drawInfinityPath(ctx, x, y, 60 + i * 20, time * 0.1 + i);
        ctx.stroke();
      }

      // Draw connection lines between nearby particles
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
}
