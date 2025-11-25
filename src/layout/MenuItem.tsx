import { NavLink } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  to: string;
  icon: LucideIcon;
  label: string;
}

function MenuItem({ to, icon: Icon, label }: MenuItemProps) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 16px',
        borderRadius: '8px',
        color: 'white',
        textDecoration: 'none',
        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
        transition: 'background-color 0.2s',
      })}
    >
      <Icon size={20} />
      <span>{label}</span>
    </NavLink>
  );
}

export default MenuItem;
