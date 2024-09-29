'use client';

import { useState, useRef, useEffect } from 'react';
import Chevron from './chevron';

export default function SidebarToggle({
  children,
  isActive,
  toggleFromRefresh,
}: Readonly<{
  children: React.ReactNode;
  isActive: boolean;
  toggleFromRefresh: boolean;
}>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toggleFromRefresh) {
      setIsExpanded(true);
    }
  }, [toggleFromRefresh]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const contentHeight =
    isExpanded && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px';

  const ulStyle = {
    height: contentHeight,
    opacity: isExpanded ? 1 : 0.75,
    overflow: 'hidden',
    transition: 'opacity 0.15s ease-in-out 0s, height 0.2s ease-in-out 0s',
  };

  if (!children || !Array.isArray(children)) {
    return null;
  }

  return (
    <>
      <div className="flex cursor-pointer items-center justify-between" onClick={toggleSidebar}>
        {children[0]}
        <Chevron
          direction={isExpanded ? 'DOWN' : 'RIGHT'}
          colorClass={
            isActive ? 'text-sky-500 hover:text-sky-700' : 'text-gray-700 hover:text-gray-900'
          }
        />
      </div>
      <div ref={contentRef} style={ulStyle}>
        {children[1]}
      </div>
    </>
  );
}
