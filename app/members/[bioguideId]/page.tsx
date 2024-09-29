import { congressBaseUrl } from '@/lib/fetchAddresses';
import { getSponsoredLegislation, getCoSponsoredLegislation, getCongressMember } from '@/lib/data';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function MemberPage({ params }: { params: { bioguideId: string } }) {
  const bioguideId = params.bioguideId;

  const member = await getCongressMember(bioguideId);
  const imgUrl = member.imageurl || '/asdf';

  // const [sponsoredLeg, coSponsoredLeg] = await Promise.all([
  //   getSponsoredLegislation(bioguideId),
  //   getCoSponsoredLegislation(bioguideId),
  // ]);

  return (
    <>
      {/* <Image src={imgUrl} width={150} height={150} alt={`Picture of ${member.directordername}`} /> */}
      {/* <h1 className="text-lg font-bold">{member?.directordername}</h1> */}
    </>
  );

  // console.log(params);

  // console.log(sponsoredLeg.sponsoredLegislation[0].latestAction.text);
}
