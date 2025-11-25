import type { ReactNode } from 'react';
import { Accordion } from '@/components/ui/accordion';

interface UserAccordionProps {
  userId: number;
  hasReports: boolean;
  children: ReactNode;
  expanded?: boolean;
  onToggle?: () => void;
}

const UserAccordion = ({
  userId,
  hasReports,
  children,
  expanded = false,
  onToggle,
}: UserAccordionProps) => {
  return (
    <Accordion
      type="multiple"
      className="w-full"
      style={{
        margin: '10px 0',
      }}
      value={expanded ? [`user-${userId}`] : []}
      onValueChange={() => {
        if (hasReports && onToggle) {
          onToggle();
        }
      }}
    >
      {children}
    </Accordion>
  );
};

export default UserAccordion;
