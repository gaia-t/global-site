// Soft mesh-style ambient glow for light sections.
// Place inside a `relative overflow-hidden` section; keep content at z-10.
export default function AmbientGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute -top-40 -left-40 w-[640px] h-[640px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(22,158,107,0.09), transparent 68%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[680px] h-[680px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,194,224,0.07), transparent 68%)", filter: "blur(80px)" }}
      />
    </div>
  );
}
