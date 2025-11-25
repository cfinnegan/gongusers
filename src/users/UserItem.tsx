import type { UserNode } from '../types/users';
import UserCard from './UserCard';
import UserList from './UserList';
import UserAccordion from './UserAccordion';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

interface UserItemProps {
  user: UserNode;
  isExpanded?: (id: number) => boolean;
  onToggle?: (id: number) => void;
}

const UserItem = ({ user, isExpanded, onToggle }: UserItemProps) => {
  const hasReports = (user.reports?.length ?? 0) > 0;

  return (
    <UserAccordion
      userId={user.id}
      hasReports={hasReports}
      expanded={isExpanded?.(user.id) ?? false}
      onToggle={() => onToggle?.(user.id)}
    >
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
            <UserList
              users={user.reports}
              isExpanded={isExpanded}
              onToggle={onToggle}
            />
          </AccordionContent>
        )}
      </AccordionItem>
    </UserAccordion>
  );
};

export default UserItem;
