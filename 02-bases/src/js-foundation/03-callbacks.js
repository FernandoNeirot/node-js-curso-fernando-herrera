const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com'
    },
    {
        id: 3,
        name: 'John Smith',
        email: 'john.smith@example.com'
    }
];

const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    
    (!user) ? callback(`User not found with id ${id}`) : callback(null, user);
};

module.exports = { getUserById };