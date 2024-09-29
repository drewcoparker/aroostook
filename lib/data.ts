import prisma from '@/prisma/prisma';
import { Member } from './definitions';
import { congressBaseUrl } from './fetchAddresses';

export async function getCongressMembers(): Promise<Member[]> {
  const members = await prisma.members.findMany({
    where: { currentmember: true },
    orderBy: [{ state: 'asc' }, { district: 'asc' }],
  });

  return members as Member[];
}

export async function getCongressMember(bioguideId: string): Promise<Member> {
  const member = await prisma.members.findUnique({
    where: {
      bioguideid: bioguideId,
    },
  });

  return member as Member;
}

export async function getSponsoredLegislation(bioguideId: string) {
  const data = await fetch(
    `${congressBaseUrl}/member/${bioguideId}/sponsored-legislation?api_key=${process.env.CONGRESS_API_KEY}`,
    {
      cache: 'force-cache',
    },
  );

  return data.json();
}

export async function getCoSponsoredLegislation(bioguideId: string) {
  const data = await fetch(
    `${congressBaseUrl}/member/${bioguideId}/cosponsored-legislation?api_key=${process.env.CONGRESS_API_KEY}`,
    {
      cache: 'force-cache',
    },
  );

  return data.json();
}
