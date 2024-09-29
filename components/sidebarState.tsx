'use client';

import { Member } from '@/lib/definitions';
import SidebarStateMembers from './sidebarStateMembers';
import { HOUSE_OF_REPRESENTATIVES, SENATE } from '@/lib/constants';

interface SidebarStateProps {
  representatives: Member[];
  senators: Member[];
  activeMember: Member | null;
  setActiveMember: (member: Member | null) => void;
  memberToScrollToAfterRefresh: string | null;
}

export default function SidebarState({
  representatives,
  senators,
  activeMember,
  setActiveMember,
  memberToScrollToAfterRefresh,
}: SidebarStateProps) {
  return (
    <>
      <SidebarStateMembers
        chamber={HOUSE_OF_REPRESENTATIVES}
        members={representatives}
        activeMember={activeMember}
        setActiveMember={setActiveMember}
        memberToScrollToAfterRefresh={memberToScrollToAfterRefresh}
      />
      <SidebarStateMembers
        chamber={SENATE}
        members={senators}
        activeMember={activeMember}
        setActiveMember={setActiveMember}
        memberToScrollToAfterRefresh={memberToScrollToAfterRefresh}
      />
    </>
  );
}
