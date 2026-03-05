/**
 * Hand-drawn style SVG illustrations and organic decorative elements.
 * Inspired by Headspace/Gathered Here — soft organic blobs, gentle lines,
 * warm colors, approachable for teens while trustworthy for parents.
 */

// ─── Organic Blob Shapes ──────────────────────────────────────────────────────

export function BlobShape({
  className = "",
  color = "currentColor",
  variant = 1,
}: {
  className?: string;
  color?: string;
  variant?: 1 | 2 | 3 | 4 | 5;
}) {
  const paths: Record<number, string> = {
    1: "M44.5,3.5Q57,7,65,19.5Q73,32,68,47.5Q63,63,48.5,69Q34,75,20,67.5Q6,60,3.5,44Q1,28,12,16.5Q23,5,33.75,4.25Q44.5,3.5,44.5,3.5Z",
    2: "M42,2Q58,4,69,17Q80,30,74,47Q68,64,52,72Q36,80,21,70Q6,60,3,43.5Q0,27,13,15Q26,3,34,2.5Q42,2,42,2Z",
    3: "M45,5Q55,10,66,21Q77,32,72,48Q67,64,52,70Q37,76,23,67Q9,58,5,43Q1,28,14,17Q27,6,36,5.5Q45,5,45,5Z",
    4: "M40,3Q56,6,67,19Q78,32,73,48Q68,64,53,71Q38,78,22,69Q6,60,4,44Q2,28,15,16Q28,4,34,3.5Q40,3,40,3Z",
    5: "M46,4Q58,8,67,20Q76,32,71,48Q66,64,51,71Q36,78,21,68Q6,58,3,43Q0,28,13,16Q26,4,36,4Q46,4,46,4Z",
  };

  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={paths[variant]} />
    </svg>
  );
}

// ─── Squiggly Line ────────────────────────────────────────────────────────────

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10C12 4 22 16 32 10C42 4 52 16 62 10C72 4 82 16 92 10C102 4 112 16 122 10C132 4 142 16 152 10C162 4 172 16 182 10C192 4 198 10 198 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Doodle Star ──────────────────────────────────────────────────────────────

export function DoodleStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2C20.5 14 21 15 38 20C21 21 20.5 22 20 38C19.5 22 19 21 2 20C19 19 19.5 14 20 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

// ─── Doodle Arrow (curved) ────────────────────────────────────────────────────

export function DoodleArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 45C15 48 30 50 45 40C60 30 65 15 60 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M55 3L61 9L67 5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Dots Cluster ─────────────────────────────────────────────────────────────

export function DotsCluster({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="3" opacity="0.6" />
      <circle cx="30" cy="8" r="2.5" opacity="0.4" />
      <circle cx="50" cy="12" r="3.5" opacity="0.5" />
      <circle cx="8" cy="30" r="2" opacity="0.3" />
      <circle cx="28" cy="28" r="4" opacity="0.6" />
      <circle cx="48" cy="32" r="2.5" opacity="0.4" />
      <circle cx="12" cy="50" r="3" opacity="0.5" />
      <circle cx="32" cy="48" r="2" opacity="0.3" />
      <circle cx="52" cy="50" r="3.5" opacity="0.6" />
    </svg>
  );
}

// ─── Underline Scribble ───────────────────────────────────────────────────────

export function ScribbleUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 9C30 3 60 3 100 5C140 7 170 4 197 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M5 7C35 11 65 2 100 6C135 10 165 3 195 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

// ─── Circle Scribble ──────────────────────────────────────────────────────────

export function ScribbleCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 8C72 6 92 22 94 48C96 74 78 92 52 94C26 96 8 78 6 52C4 26 22 8 50 8Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Lightning bolt doodle ────────────────────────────────────────────────────

export function DoodleBolt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 48"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 2L4 22H14L12 46L28 22H17L18 2Z" />
    </svg>
  );
}

// ─── Checkmark doodle ─────────────────────────────────────────────────────────

export function DoodleCheck({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 22C12 26 16 30 18 32C22 24 30 12 36 6"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Book / Study illustration ────────────────────────────────────────────────

export function IllustrationStudy({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Book base */}
      <rect
        x="20"
        y="40"
        width="80"
        height="55"
        rx="4"
        className="fill-primary/10 stroke-primary/40"
        strokeWidth="2"
      />
      {/* Book spine */}
      <line
        x1="60"
        y1="40"
        x2="60"
        y2="95"
        className="stroke-primary/30"
        strokeWidth="2"
      />
      {/* Pages - left */}
      <line x1="30" y1="55" x2="55" y2="55" className="stroke-primary/20" strokeWidth="1.5" />
      <line x1="30" y1="62" x2="52" y2="62" className="stroke-primary/20" strokeWidth="1.5" />
      <line x1="30" y1="69" x2="55" y2="69" className="stroke-primary/20" strokeWidth="1.5" />
      <line x1="30" y1="76" x2="48" y2="76" className="stroke-primary/20" strokeWidth="1.5" />
      {/* Pages - right */}
      <line x1="65" y1="55" x2="90" y2="55" className="stroke-primary/20" strokeWidth="1.5" />
      <line x1="65" y1="62" x2="87" y2="62" className="stroke-primary/20" strokeWidth="1.5" />
      <line x1="65" y1="69" x2="90" y2="69" className="stroke-primary/20" strokeWidth="1.5" />
      {/* Star above book */}
      <path
        d="M60 18C60.3 26 61 27 68 30C61 31 60.3 32 60 38C59.7 32 59 31 52 30C59 29 59.7 26 60 18Z"
        className="fill-chart-3"
      />
      {/* Small stars */}
      <circle cx="35" cy="28" r="2" className="fill-accent/50" />
      <circle cx="82" cy="24" r="1.5" className="fill-chart-4/50" />
    </svg>
  );
}

// ─── Rocket / Growth illustration ─────────────────────────────────────────────

export function IllustrationGrowth({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plant pot */}
      <path
        d="M42 90L48 110H72L78 90"
        className="fill-chart-3/15 stroke-chart-3/50"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Stem */}
      <path
        d="M60 90C60 70 60 55 60 45"
        className="stroke-accent/60"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <path
        d="M60 70C50 62 42 65 40 68C42 72 50 74 60 70Z"
        className="fill-accent/30 stroke-accent/50"
        strokeWidth="1.5"
      />
      <path
        d="M60 55C70 47 78 50 80 53C78 57 70 59 60 55Z"
        className="fill-accent/30 stroke-accent/50"
        strokeWidth="1.5"
      />
      {/* Flower / bloom */}
      <circle cx="60" cy="35" r="12" className="fill-primary/10 stroke-primary/40" strokeWidth="2" />
      <circle cx="60" cy="35" r="5" className="fill-chart-3/40" />
      {/* Sparkles */}
      <circle cx="38" cy="30" r="2" className="fill-chart-3/50" />
      <circle cx="85" cy="40" r="1.5" className="fill-chart-4/40" />
      <path
        d="M78 20C78.2 23 79 24 82 24C79 24.2 78.2 25 78 28C77.8 25 77 24.2 74 24C77 23.8 77.8 23 78 20Z"
        className="fill-chart-3/60"
      />
    </svg>
  );
}

// ─── Community / People illustration ──────────────────────────────────────────

export function IllustrationCommunity({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Person 1 (left) */}
      <circle cx="35" cy="45" r="10" className="fill-accent/20 stroke-accent/50" strokeWidth="2" />
      <path
        d="M20 85C20 70 27 62 35 62C43 62 50 70 50 85"
        className="fill-accent/15 stroke-accent/40"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Person 2 (center, larger) */}
      <circle cx="60" cy="40" r="12" className="fill-primary/15 stroke-primary/40" strokeWidth="2" />
      <path
        d="M40 88C40 70 49 60 60 60C71 60 80 70 80 88"
        className="fill-primary/10 stroke-primary/30"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Person 3 (right) */}
      <circle cx="85" cy="45" r="10" className="fill-chart-3/25 stroke-chart-3/50" strokeWidth="2" />
      <path
        d="M70 85C70 70 77 62 85 62C93 62 100 70 100 85"
        className="fill-chart-3/15 stroke-chart-3/40"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Connection lines */}
      <path
        d="M45 52C50 48 55 46 60 46"
        className="stroke-primary/20"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      <path
        d="M75 52C70 48 65 46 60 46"
        className="stroke-primary/20"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      {/* Heart */}
      <path
        d="M57 22C57 19 60 17 62 19C64 17 67 19 67 22C67 26 62 29 62 29C62 29 57 26 57 22Z"
        className="fill-chart-3/50"
      />
    </svg>
  );
}

// ─── Calendar / Planning illustration ─────────────────────────────────────────

export function IllustrationPlanning({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Calendar body */}
      <rect
        x="20"
        y="30"
        width="80"
        height="70"
        rx="6"
        className="fill-primary/8 stroke-primary/30"
        strokeWidth="2"
      />
      {/* Calendar header */}
      <rect
        x="20"
        y="30"
        width="80"
        height="18"
        rx="6"
        className="fill-primary/15"
      />
      <rect x="20" y="42" width="80" height="6" className="fill-primary/15" />
      {/* Calendar hooks */}
      <line x1="40" y1="24" x2="40" y2="36" className="stroke-primary/40" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="80" y1="24" x2="80" y2="36" className="stroke-primary/40" strokeWidth="2.5" strokeLinecap="round" />
      {/* Grid dots */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4, 5].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={32 + col * 12}
            cy={58 + row * 9}
            r="2"
            className={
              row === 1 && col === 2
                ? "fill-primary/60"
                : row === 2 && col === 4
                  ? "fill-accent/50"
                  : "fill-primary/15"
            }
          />
        )),
      )}
      {/* Check on highlighted date */}
      <path
        d="M53 65L56 68L62 62"
        className="stroke-primary"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sparkle */}
      <path
        d="M95 25C95.2 28 96 29 99 29C96 29.2 95.2 30 95 33C94.8 30 94 29.2 91 29C94 28.8 94.8 28 95 25Z"
        className="fill-chart-3/60"
      />
    </svg>
  );
}
