import { TeamMember as TeamMemberType } from 'client';
import styles from 'scss/pages/team.module.scss';

interface TeamMemberProps {
  teamMember: TeamMemberType;
}

export default function TeamMember({ teamMember }: TeamMemberProps) {
  return (
    <div className={`${styles.member} basis-3/12`}>
      <img
        src={teamMember?.profilePic.mediaItemUrl}
        alt={teamMember?.profilePic?.altText}
      />
      <h2>{teamMember?.fullName}</h2>
      <div
        className="bio"
        dangerouslySetInnerHTML={{ __html: teamMember?.bio }}
      />
    </div>
  );
}