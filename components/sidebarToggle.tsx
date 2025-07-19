'use client';

import { useState, useRef, useEffect, useLayoutEffect } from 'react';
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
  const [contentHeight, setContentHeight] = useState('0px');
  const [transitionDuration, setTransitionDuration] = useState('0.3s');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toggleFromRefresh) {
      setIsExpanded(true);
    }
  }, [toggleFromRefresh]);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const height = isExpanded ? `${contentRef.current.scrollHeight}px` : '0px';
      const duration = Math.min(0.15 + contentRef.current.scrollHeight / 1000, 0.5);
      setContentHeight(height);
      setTransitionDuration(`${duration}s`);
    }
  }, [isExpanded]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const ulStyle = {
    height: contentHeight,
    opacity: isExpanded ? 1 : 0.75,
    overflow: 'hidden',
    transition: `height ${transitionDuration} ease-in-out, opacity ${transitionDuration} ease-in-out`,
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
          transitionDuration={transitionDuration}
        />
      </div>
      <div ref={contentRef} style={ulStyle}>
        {children[1]}
      </div>
    </>
  );
}
