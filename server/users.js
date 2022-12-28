const users = [];

const addUser = ({ id, name, room}) => {
    //name and room --- Jay Patel then Write --- JayPatel
    name = name.trim().tolowerCase();
    room = room.trim().tolowerCase();

    //Check for the existing user 
    const existingUser = users.find((user) => user.room === room && user.name === name);
    if (existingUser) {
        return {error : 'User already exists'};
    }

    //Addinfg new user
    const user = { id, name, room };
    users.push(user);
    return {user}
}

const removeUser = (id) => {
    //Check user exists with the given id
    const index = users.findIndex((user) => user.id === id);
    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUsers = (id) => {
    users.find((user) => user.id === id);
}

const getUsersInRoom = (room) => {
    users.filter((user) => user.room === room);
}

module.exports = { addUsers, removeUsers, getUsers, getUsersInRoom};