import AppTopBar from './AppTopBar';
import MainMenu from './MainMenu';
import Content from './Content';

function AppLayout() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
      }}
    >
      <AppTopBar />
      <div
        style={{
          display: 'flex',
          flex: 1,
          overflow: 'hidden',
        }}
      >
        <MainMenu />
        <Content />
      </div>
    </div>
  );
}

export default AppLayout;
