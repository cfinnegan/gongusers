function UserCountText({
  numRootUsers,
  numUsers,
}: {
  numRootUsers: number;
  numUsers: number;
}) {
  const rootUserText = numRootUsers === 1 ? 'root user' : 'root users';
  const userText = numUsers === 1 ? 'user total' : 'users total';

  return (
    <div style={{ color: '#4a4a4a', fontSize: '14px' }}>
      {numRootUsers} {rootUserText} - {numUsers} {userText}
    </div>
  );
}

export default UserCountText;
