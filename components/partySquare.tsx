'use client';

import { DEMOCRATIC, REPUBLICAN } from '@/lib/constants';

interface PartySquareProps {
  party: string;
}

export default function PartySquare({ party }: PartySquareProps) {
  return (
    <div
      className={`flex h-2 w-2 items-center justify-center rounded-sm p-2 ${
        party === REPUBLICAN
          ? 'bg-rose-500'
          : party === DEMOCRATIC
            ? 'bg-blue-500'
            : 'bg-violet-500'
      }`}
    >
      <span className="text-[0.7rem] leading-4 text-white">{Array.from(party)[0]}</span>
    </div>
  );
}
