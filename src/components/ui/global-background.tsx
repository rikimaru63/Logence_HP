"use client";

/**
 * GlobalBackground - サイト全体の背景オーラ
 * z-index: -1 で固定配置し、全ページで「Logenceの空気感」を維持する
 */
export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base background color */}
      <div className="absolute inset-0 bg-slate-50" />

      {/* Static Echo Orbs - 動かない、非常に薄い光のオーブ */}
      {/* Top-left blue orb */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Top-right cyan orb */}
      <div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Center-left navy orb */}
      <div
        className="absolute top-1/3 -left-40 w-[450px] h-[450px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(30, 58, 95, 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Center-right blue orb */}
      <div
        className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Bottom-left cyan orb */}
      <div
        className="absolute bottom-1/4 -left-20 w-[350px] h-[350px] rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Bottom-right navy orb */}
      <div
        className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(30, 58, 95, 0.07) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid pattern for texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 58, 95, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 95, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
}
