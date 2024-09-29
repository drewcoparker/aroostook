'use client';

import { Member, StateRepresentations } from '@/lib/definitions';
import SidebarToggle from './sidebarToggle';
import SidebarState from './sidebarState';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

interface SidebarStatesProps {
  stateRepresentations: StateRepresentations;
  members: Map<string, Member>;
}

export default function SidebarStates({ stateRepresentations, members }: SidebarStatesProps) {
  const [activeMember, setActiveMember] = useState<Member | null>(null);
  const [toggleFromRefresh, setToggleFromRefresh] = useState<boolean>(false);
  const [memberToScrollToAfterRefresh, setMemberToScrollToAfterRefresh] = useState<string | null>(
    null,
  );
  const pathname = usePathname().split('/').at(-1);

  useEffect(() => {
    if (!activeMember && pathname && pathname !== 'members') {
      const member = members.get(pathname);
      if (member) {
        setActiveMember(member);
        setToggleFromRefresh(true);
        setMemberToScrollToAfterRefresh(member.bioguideid);
      }
    }
  }, [activeMember, pathname, members]);

  return (
    <>
      {stateRepresentations &&
        Object.keys(stateRepresentations).map((state) => (
          <li className="mb-4 last:mb-0" key={state}>
            <SidebarToggle
              isActive={activeMember?.state === state}
              toggleFromRefresh={activeMember?.state === state && toggleFromRefresh}
            >
              <h1
                className={`text-md font-medium transition-colors duration-300 ${activeMember?.state === state ? 'text-sky-500 hover:text-sky-700' : 'text-gray-700 hover:text-gray-900'}`}
              >
                {state}
              </h1>
              <ul className="ml-1 border-l border-gray-200 pl-3 text-sm text-gray-500">
                <SidebarState
                  representatives={stateRepresentations[state].representatives}
                  senators={stateRepresentations[state].senators}
                  activeMember={activeMember}
                  setActiveMember={setActiveMember}
                  memberToScrollToAfterRefresh={memberToScrollToAfterRefresh}
                />
              </ul>
            </SidebarToggle>
          </li>
        ))}
    </>
  );
}
