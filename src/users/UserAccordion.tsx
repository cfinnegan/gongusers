import { useState } from 'react';
import type { ReactNode } from 'react';
import { Accordion } from '@/components/ui/accordion';

interface UserAccordionProps {
  userId: number;
  hasReports: boolean;
  children: ReactNode;
}

const UserAccordion = ({
  userId,
  hasReports,
  children,
}: UserAccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      style={{
        margin: '10px 0',
      }}
      value={isExpanded ? `user-${userId}` : ''}
      onValueChange={(value) => {
        if (hasReports) {
          setIsExpanded(value === `user-${userId}`);
        }
      }}
    >
      {children}
    </Accordion>
  );
};

export default UserAccordion;
