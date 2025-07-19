interface ChevronProps {
  direction: 'DOWN' | 'RIGHT';
  colorClass: string;
  transitionDuration?: string;
}

export default function Chevron({
  direction = 'DOWN',
  colorClass,
  transitionDuration = '0.2s',
}: ChevronProps) {
  return (
    <>
      <svg
        className={colorClass}
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
        style={{
          width: '20px',
          height: '20px',
          transform: direction === 'RIGHT' ? 'rotate(-90deg)' : 'rotate(0deg)',
          transition: `transform ${transitionDuration} ease-in-out`,
        }}
      >
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    </>
  );
}
