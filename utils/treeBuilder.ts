import type { User, UserNode } from '../src/types/users';

/* 
Loop over all users:
- build a map of user id to user object
- and create a new data structure where each user ID has a 'reports' array
*/

export const buildTree = (
  users: User[]
): { tree: UserNode[]; totalCount: number; allUserIds: number[] } => {
  const userMap: { [key: number]: UserNode } = {};
  const userTree: UserNode[] = [];
  const allUserIds: number[] = [];

  // Build the user map and initialize reports array
  for (const user of users) {
    userMap[user.id] = { ...user, reports: [], managerStatus: 'unchecked' };
    allUserIds.push(user.id);
  }

  // Recursive function to detect circular references (A->B->C->A)
  const detectCircularReferences = (
    user: UserNode,
    path: number[]
  ): boolean => {
    if (!user.managerId) {
      return false;
    }
    if (path.includes(user.managerId)) {
      return true;
    }
    path.push(user.managerId);
    const managerNode = userMap[user.managerId];
    if (managerNode) {
      return detectCircularReferences(managerNode, path);
    }
    return false;
  };

  // Build the hierarchy
  for (const user of users) {
    const userNode = userMap[user.id];
    if (userNode.managerId) {
      const managerNode = userMap[userNode.managerId];

      // Manager not found - treat as root node
      if (!managerNode) {
        userNode.managerStatus = 'missing';
        userTree.push(userNode);
        continue;
      }

      // If there is a circular reference, mark the user as circular
      const isCircular = detectCircularReferences(userNode, [userNode.id]);
      if (isCircular) {
        userNode.managerStatus = 'circular';
        userNode.circularManagerId = userNode.managerId;
        userNode.managerId = null;
        userTree.push(userNode);
      } else {
        // Manager found - add user to manager's reports
        userNode.managerStatus = 'valid';
        managerNode.reports.push(userNode);
      }
    } else {
      // No manager - legitimate root node
      userNode.managerStatus = 'valid';
      userTree.push(userNode);
    }
  }

  const totalCount = Object.keys(userMap).length;

  return { tree: userTree, totalCount, allUserIds };
};
