import type { CSSProperties } from "react";

type Props = {
  /** Percent-based position over parent (0-100). */
  x: number;
  y: number;
  w: number;
  h: number;
  label?: string;
  confidence?: number;
  tone?: "warn" | "danger";
  delay?: number;
};

export function BoundingBox({
  x,
  y,
  w,
  h,
  label = "PERSON",
  confidence = 0.98,
  tone = "danger",
  delay = 0,
}: Props) {
  const color = tone === "danger" ? "#ff5b1f" : "#ffb020";
  const style: CSSProperties = {
    left: `${x}%`,
    top: `${y}%`,
    width: `${w}%`,
    height: `${h}%`,
    borderColor: color,
    animation: `bbox-in 500ms ${delay}ms cubic-bezier(.2,.8,.2,1) both`,
  };
  return (
    <div
      className="pointer-events-none absolute border-[1.5px] border-dashed"
      style={style}
      aria-hidden="true"
    >
      {/* corner ticks */}
      {["-top-px -left-px", "-top-px -right-px", "-bottom-px -left-px", "-bottom-px -right-px"].map(
        (pos) => (
          <span
            key={pos}
            className={`absolute h-2.5 w-2.5 ${pos}`}
            style={{ borderColor: color, borderWidth: 2, borderStyle: "solid" }}
          />
        ),
      )}
      <div
        className="absolute -top-6 left-0 flex items-center gap-2 px-2 py-0.5 text-[10px] font-mono tracking-wider"
        style={{ background: color, color: "#0b0f14" }}
      >
        <span className="font-bold">{label}</span>
        <span className="opacity-80">{confidence.toFixed(2)}</span>
      </div>
    </div>
  );
}

export function ScanLine({ delay = 0 }: { delay?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(255,91,31,0.9), transparent)",
        boxShadow: "0 0 24px 4px rgba(255,91,31,0.35)",
        animation: `scan-line 3.4s ${delay}ms ease-in-out infinite`,
      }}
      aria-hidden="true"
    />
  );
}

export function CornerFrame() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {[
        "M2 12 L2 2 L12 2",
        "M88 2 L98 2 L98 12",
        "M98 88 L98 98 L88 98",
        "M12 98 L2 98 L2 88",
      ].map((d) => (
        <path key={d} d={d} stroke="rgba(255,255,255,0.55)" strokeWidth="0.4" fill="none" />
      ))}
    </svg>
  );
}
