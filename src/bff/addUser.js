import { generateDate } from './generateDate';

export const addUser = (login, password) =>
    fetch('http://localhost:3005/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            login: login,
            password: password,
            register_at: generateDate(),
            role_id: 2,
        }),
    });
