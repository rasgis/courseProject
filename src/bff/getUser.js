import { getUsers } from './getUsers';

export const getUser = async (enterLogin) => {
    const users = await getUsers();
    return users.find(({ login }) => login === enterLogin);
};
