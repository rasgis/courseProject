import { getUser } from './getUser';
import { addUser } from './addUser';
import { createSession } from './createSession';

export const server = {
	//! Автороизация
	async authorize(authLogin, authPassword) {
		const user = await getUser();

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},

	//! Регистрация
	async register(regLogin, regPassword) {
		const user = await getUser();

		if (user) {
			return {
				error: 'Такой пользователь уже существует',
				res: null,
			};
		}

		await addUser(regLogin, regPassword);

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
};
