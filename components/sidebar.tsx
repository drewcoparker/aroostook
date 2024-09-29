import { HOUSE_OF_REPRESENTATIVES, SENATE } from '@/lib/constants';
import { Member, StateRepresentations } from '@/lib/definitions';
import { getCongressMembers } from '@/lib/data';
import SidebarStates from './sidebarStates';

export default async function Sidebar() {
  const members: Member[] = await getCongressMembers();
  const stateRepresentations: StateRepresentations = {};
  const memberLookup = new Map<string, Member>();

  /*
  // StateRepresentations
  Alabama: {
    representatives: [{ 
      directordername: Jerry L. Carl,
      ...,
    }, { 
      directordername: Barry Moore,
      ...
    }, ...],
    senators: [{
      directordername: Katie Boyd Britt,
      ... 
    }, { 
      directordername: Tommy Tuberville,
      ...,
      }, ...],
  },
  Alaska: {
    ...
  },
  */

  members.forEach((member) => {
    memberLookup.set(member.bioguideid, member);

    if (!stateRepresentations[member.state]) {
      stateRepresentations[member.state] = { representatives: [], senators: [] };
    }

    if (member.chamber === HOUSE_OF_REPRESENTATIVES) {
      stateRepresentations[member.state].representatives.push(member);
    } else if (member.chamber === SENATE) {
      stateRepresentations[member.state].senators.push(member);
    }
  });

  return (
    <ul className="pl-3 pr-1">
      <SidebarStates stateRepresentations={stateRepresentations} members={memberLookup} />
    </ul>
  );
}
