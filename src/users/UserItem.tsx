import type { UserNode } from '../types/users';
import UserCard from './UserCard';
import UserList from './UserList';
import UserAccordion from './UserAccordion';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const UserItem = ({ user }: { user: UserNode }) => {
  const hasReports = (user.reports?.length ?? 0) > 0;

  return (
    <UserAccordion userId={user.id} hasReports={hasReports}>
      <AccordionItem value={`user-${user.id}`} className="border-none">
        <AccordionTrigger
          style={{
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
          className={`py-0 hover:no-underline [&>svg]:hidden ${
            !hasReports ? 'pointer-events-none cursor-default' : ''
          }`}
        >
          <UserCard user={user} />
        </AccordionTrigger>
        {hasReports && (
          <AccordionContent className="pt-0">
            <UserList users={user.reports} />
          </AccordionContent>
        )}
      </AccordionItem>
    </UserAccordion>
  );
};

export default UserItem;
