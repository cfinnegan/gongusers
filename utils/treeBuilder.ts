import type { User, UserNode } from '../src/types/users';

/* 
Loop over all users:
- build a map of user id to user object
- and create a new data structure where each user ID has a 'reports' array
*/

export const buildTree = (
  users: User[]
): { tree: UserNode[]; totalCount: number } => {
  const userMap: { [key: number]: UserNode } = {};
  const userTree: UserNode[] = [];

  // Build the user map and initialize reports array
  for (const user of users) {
    userMap[user.id] = { ...user, reports: [], managerStatus: 'unchecked' };
  }

  // Build the hierarchy
  for (const user of users) {
    const userNode = userMap[user.id];
    if (user.managerId) {
      const managerNode = userMap[user.managerId];
      if (managerNode) {
        // Manager found - add user to manager's reports
        userNode.managerStatus = 'valid';
        managerNode.reports.push(userNode);
      } else {
        // Manager not found - treat as root node
        userNode.managerStatus = 'missing';
        userTree.push(userNode);
      }
    } else {
      // No manager - legitimate root node
      userNode.managerStatus = 'valid';
      userTree.push(userNode);
    }
  }

  const totalCount = Object.keys(userMap).length;

  return { tree: userTree, totalCount };
};
