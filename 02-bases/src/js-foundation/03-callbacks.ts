interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
  },
  {
    id: 3,
    name: 'John Smith',
    email: 'john.smith@example.com',
  },
];

export const getUserById = (
  id: number,
  callback: (error: string | null, user?: User) => void,
): void => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    callback(`User not found with id ${id}`);
    return;
  }

  callback(null, user);
};
