import Search from '@/components/search';
import { CongressMember } from './lib/definitions';
import prisma from '@/lib/prisma';

export default async function Home() {
  const representativs = await prisma.members.findMany({
    where: { chamber: 'House of Representatives', currentmember: true },
  });
  const senators = await prisma.members.findMany({
    where: { chamber: 'Senate', currentmember: true },
  });
  return (
    <main>
      <section className="flex h-screen">
        <div>
          {representativs.map((member) => (
            <div key={member.bioguideid} className="mb-8">
              <h2>
                {member.directordername} ({member.partyabbreviation})
              </h2>
              <p>
                {member.state}, District {member.district}
              </p>
            </div>
          ))}
        </div>
        <div>
          <div>
            {senators.map((member) => (
              <div key={member.bioguideid} className="mb-8">
                <h2>
                  {member.directordername} ({member.partyabbreviation})
                </h2>
                <p>
                  {member.state}, District {member.district}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
