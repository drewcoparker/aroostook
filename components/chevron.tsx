interface ChevronProps {
  direction: 'DOWN' | 'RIGHT';
  colorClass: string;
}

export default function Chevron({ direction = 'DOWN', colorClass }: ChevronProps) {
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
        style={{ width: '20px', height: '20px' }}
      >
        <path d={direction === 'RIGHT' ? 'M9 18l6-6-6-6' : 'M6 9l6 6 6-6'}></path>
      </svg>
    </>
  );
}
