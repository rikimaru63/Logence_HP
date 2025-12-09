"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface Beam {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  speed: number;
  opacity: number;
  hue: number;
  direction: "horizontal" | "vertical";
  trail: { x: number; y: number; opacity: number }[];
}

interface BackgroundBeamsProps {
  className?: string;
  gridSize?: number;
  beamCount?: number;
}

export function BackgroundBeams({
  className = "",
  gridSize = 60,
  beamCount = 8,
}: BackgroundBeamsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const createBeam = useCallback(
    (canvas: HTMLCanvasElement): Beam => {
      const isHorizontal = Math.random() > 0.5;
      const gridLines = isHorizontal
        ? Math.floor(canvas.height / gridSize)
        : Math.floor(canvas.width / gridSize);
      const gridLine = Math.floor(Math.random() * gridLines) * gridSize;

      return {
        x: isHorizontal ? -100 : gridLine,
        y: isHorizontal ? gridLine : -100,
        vx: isHorizontal ? 1 : 0,
        vy: isHorizontal ? 0 : 1,
        length: 80 + Math.random() * 120,
        speed: 1.5 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.4,
        hue: 230 + Math.random() * 40, // Purple to blue range
        direction: isHorizontal ? "horizontal" : "vertical",
        trail: [],
      };
    },
    [gridSize]
  );

  const drawGrid = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.strokeStyle = "rgba(99, 102, 241, 0.04)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Grid intersections (nodes)
      ctx.fillStyle = "rgba(99, 102, 241, 0.08)";
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    },
    [gridSize]
  );

  const drawBeam = useCallback(
    (ctx: CanvasRenderingContext2D, beam: Beam) => {
      // Draw trail
      beam.trail.forEach((point, index) => {
        const trailOpacity = point.opacity * (index / beam.trail.length) * 0.5;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${beam.hue}, 80%, 60%, ${trailOpacity})`;
        ctx.fill();
      });

      // Draw main beam with gradient
      const gradient = ctx.createLinearGradient(
        beam.x - beam.vx * beam.length,
        beam.y - beam.vy * beam.length,
        beam.x,
        beam.y
      );
      gradient.addColorStop(0, `hsla(${beam.hue}, 80%, 60%, 0)`);
      gradient.addColorStop(0.5, `hsla(${beam.hue}, 80%, 65%, ${beam.opacity * 0.6})`);
      gradient.addColorStop(1, `hsla(${beam.hue}, 90%, 70%, ${beam.opacity})`);

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.moveTo(beam.x - beam.vx * beam.length, beam.y - beam.vy * beam.length);
      ctx.lineTo(beam.x, beam.y);
      ctx.stroke();

      // Draw head glow
      const glowGradient = ctx.createRadialGradient(
        beam.x,
        beam.y,
        0,
        beam.x,
        beam.y,
        12
      );
      glowGradient.addColorStop(0, `hsla(${beam.hue}, 90%, 75%, ${beam.opacity})`);
      glowGradient.addColorStop(0.5, `hsla(${beam.hue}, 80%, 60%, ${beam.opacity * 0.3})`);
      glowGradient.addColorStop(1, `hsla(${beam.hue}, 70%, 50%, 0)`);

      ctx.beginPath();
      ctx.fillStyle = glowGradient;
      ctx.arc(beam.x, beam.y, 12, 0, Math.PI * 2);
      ctx.fill();

      // Draw bright core
      ctx.beginPath();
      ctx.fillStyle = `hsla(${beam.hue}, 100%, 85%, ${beam.opacity})`;
      ctx.arc(beam.x, beam.y, 3, 0, Math.PI * 2);
      ctx.fill();
    },
    []
  );

  const updateBeam = useCallback(
    (beam: Beam, canvas: HTMLCanvasElement): Beam => {
      // Update position
      beam.x += beam.vx * beam.speed;
      beam.y += beam.vy * beam.speed;

      // Add to trail
      beam.trail.push({ x: beam.x, y: beam.y, opacity: beam.opacity });
      if (beam.trail.length > 20) {
        beam.trail.shift();
      }

      // Random direction change at grid intersections
      const atHorizontalLine = Math.abs(beam.y % gridSize) < beam.speed * 2;
      const atVerticalLine = Math.abs(beam.x % gridSize) < beam.speed * 2;

      if (atHorizontalLine && atVerticalLine && Math.random() < 0.15) {
        // Snap to grid
        beam.x = Math.round(beam.x / gridSize) * gridSize;
        beam.y = Math.round(beam.y / gridSize) * gridSize;

        // Change direction
        if (beam.direction === "horizontal") {
          beam.direction = "vertical";
          beam.vx = 0;
          beam.vy = Math.random() > 0.5 ? 1 : -1;
        } else {
          beam.direction = "horizontal";
          beam.vy = 0;
          beam.vx = Math.random() > 0.5 ? 1 : -1;
        }
      }

      // Reset if out of bounds
      if (
        beam.x < -beam.length - 50 ||
        beam.x > canvas.width + 50 ||
        beam.y < -beam.length - 50 ||
        beam.y > canvas.height + 50
      ) {
        return createBeam(canvas);
      }

      return beam;
    },
    [gridSize, createBeam]
  );

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

    // Initialize beams
    beamsRef.current = Array.from({ length: beamCount }, () =>
      createBeam(canvas)
    );

    // Mouse tracking for subtle interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw grid
      drawGrid(ctx, rect.width, rect.height);

      // Draw mouse glow effect
      const mouseGlow = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        200
      );
      mouseGlow.addColorStop(0, "rgba(99, 102, 241, 0.05)");
      mouseGlow.addColorStop(1, "rgba(99, 102, 241, 0)");
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Update and draw beams
      beamsRef.current = beamsRef.current.map((beam) =>
        updateBeam(beam, canvas)
      );
      beamsRef.current.forEach((beam) => drawBeam(ctx, beam));

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [beamCount, createBeam, drawGrid, drawBeam, updateBeam]);

  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      {/* Radial gradient overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15), transparent)",
        }}
      />

      {/* Canvas for beams */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </div>
  );
}
