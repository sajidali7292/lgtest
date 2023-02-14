import Head from 'next/head';
import { client } from 'client';
import TeamMember from 'components/teamMember';

export default function Team() {
  const { useQuery } = client;
  const { generalSettings } = useQuery();

  const teamMembers = useQuery().teamMembers()?.nodes;

  return (
    <>

      <Head>
        <title>Meet the Team - {generalSettings.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <h2>Team Members</h2>

          <div className="flex flex-row flex-wrap">
            {teamMembers.map((teamMember, index) => (
              <TeamMember key={index} teamMember={teamMember} />
            ))}
          </div>
        </div>
      </main>

    </>
  );
}