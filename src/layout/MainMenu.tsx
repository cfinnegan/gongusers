import { Users, Settings } from 'lucide-react';
import MenuItem from './MenuItem';

const MENU_ITEMS = [
  {
    route: '/users',
    icon: Users,
    label: 'Users',
  },
  {
    route: '/settings',
    icon: Settings,
    label: 'Settings',
  },
] as const;

function MainMenu() {
  return (
    <div
      style={{
        width: '200px',
        backgroundColor: '#7644d7',
        height: '100%',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      {MENU_ITEMS.map((item) => (
        <MenuItem
          key={item.route}
          to={item.route}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </div>
  );
}

export default MainMenu;
