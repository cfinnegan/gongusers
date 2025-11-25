import { Outlet } from 'react-router-dom';

function Content() {
  return (
    <div
      style={{
        flex: 1,
        padding: '24px',
        overflow: 'auto',
      }}
    >
      <Outlet />
    </div>
  );
}

export default Content;
