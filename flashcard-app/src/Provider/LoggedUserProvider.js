import usersData from "../Data/users.json";

export const getUser = (id) => usersData.find(user => user.id === id);