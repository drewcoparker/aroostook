'use client';

import { Member } from '@/lib/definitions';
import { HOUSE_OF_REPRESENTATIVES } from '@/lib/constants';
import Link from 'next/link';
import PartySquare from './partySquare';
import { useEffect, useRef } from 'react';

interface SidebarStateMemberProps {
  chamber: string;
  members: Member[];
  activeMember: Member | null;
  setActiveMember: (member: Member | null) => void;
  memberToScrollToAfterRefresh: string | null;
}

export default function SidebarStateMembers({
  chamber,
  members,
  activeMember,
  setActiveMember,
  memberToScrollToAfterRefresh,
}: SidebarStateMemberProps) {
  if (!members || !Array.isArray(members) || members.length === 0) {
    return null;
  }

  const memberRefs = useRef<Map<string, HTMLLIElement | null>>(new Map());

  useEffect(() => {
    if (!memberToScrollToAfterRefresh) {
      return;
    }

    const memberLi = memberRefs.current.get(memberToScrollToAfterRefresh);
    if (!memberLi) {
      return;
    }

    setTimeout(() => {
      memberLi.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 200);
  }, [memberToScrollToAfterRefresh]);

  return (
    <>
      <li className="mb-1 py-1">
        <h2>{chamber === HOUSE_OF_REPRESENTATIVES ? 'Representatives' : 'Senators'}</h2>
        <ul className="ml-1 border-l border-gray-200 px-3">
          {members &&
            members.map((member) => (
              <li
                key={member.bioguideid}
                ref={(li) => {
                  memberRefs.current.set(member.bioguideid, li);
                }}
                className="relative flex items-center py-[0.125rem]"
                onClick={() => setActiveMember(member)}
              >
                {activeMember?.bioguideid === member.bioguideid && (
                  <div className="absolute left-[-13px] h-full w-0.5 bg-sky-500"></div>
                )}
                <div className="mr-2">
                  <PartySquare party={member.partyname || 'Unknown'} />
                </div>
                <Link href={`/members/${member.bioguideid}`}>
                  {activeMember?.bioguideid && activeMember.bioguideid === member.bioguideid ? (
                    <p className="text-sky-500 hover:text-sky-700">
                      {member.directordername}
                      {member.district && <span className="italic">, Dist. {member.district}</span>}
                    </p>
                  ) : (
                    <p className="transition-colors duration-300 hover:text-gray-900">
                      {member.directordername}
                      {member.district && <span className="italic">, Dist. {member.district}</span>}
                    </p>
                  )}
                </Link>
              </li>
            ))}
        </ul>
      </li>
    </>
  );
}
