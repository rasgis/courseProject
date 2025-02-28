import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { server } from '../../bff';
import { Input, Button } from '../../components';

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Обязательное поле')
		.matches(/^[a-zA-Z0-9]+$/, 'Неверный логин, допускаются только буквы и цифры')
		.min(3, 'Минимум 3 символа')
		.max(20, 'Максимум 20 символов'),
	password: yup
		.string()
		.required('Обязательное поле')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль, допускаются буквы, цифры и знаки # %',
		)
		.min(6, 'Минимум 6 символов')
		.max(30, 'Максимум 30 символов'),
});

export const Authorization = () => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const [serverError, setServerError] = useState();

	const onSubmit = ({ login, password }) => {
		server
			.authorize(login, password)
			.then(({ error, res }) => {
				if (error) {
					setServerError(`Ошибка запроса ${error}`);
				}
			})
			.catch((err) => console.error(err));
	};

	const formErrors = errors?.login?.message || errors?.password?.message;
	const errorMessage = formErrors || serverError;

	return (
		<div className="flex min-h-screen min-w-full items-center justify-center  bg-inherit">
			<div className="max-w-md w-full p-6 bg-indigo-400 rounded-lg shadow-[10px_12px_12px_-2px_#4f46e5]">
				<h2 className="max-w-md mx-auto p-4 bg-inherit rounded-md text-sky-950 font-bold font-serif text-4xl mb-3 text-center">
					Авторизация
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<div>
						<label
							htmlFor="login"
							className="block text-sm font-medium text-slate-700"
						>
							Логин
						</label>
						<Input
							type="text"
							id="login"
							{...register('login')}
							className={`mt-1 block w-full px-3 py-2 border rounded-md focus:shadow-[10px_10px_8px_-4px_#78f5da] hover:shadow-[10px_10px_8px_-4px_#78f5da] text-gray-50 focus:ring-blue-500 focus:border-blue-500 ${
								errors.login ? 'border-red-500' : 'border-gray-300'
							}`}
							placeholder="Введите логин"
						/>
						{errors.login && (
							<p className="text-red-500 text-sm mt-1">
								{errors.login.message}
							</p>
						)}
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-slate-700"
						>
							Пароль
						</label>
						<Input
							type="password"
							id="password"
							{...register('password')}
							className={`mt-1 block w-full px-3 py-2 border rounded-md focus:shadow-[10px_10px_8px_-4px_#78f5da] hover:shadow-[10px_10px_8px_-4px_#78f5da] text-gray-50 focus:ring-blue-500 focus:border-blue-500 ${
								errors.password ? 'border-red-500' : 'border-gray-300'
							}`}
							placeholder="Введите пароль"
						/>
						{errors.password && (
							<p className="text-red-500 text-sm mt-1">
								{errors.password.message}
							</p>
						)}
					</div>
					<Button
						type="submit"
						disabled={!!formErrors || !!serverError}
						className={`w-full py-2 px-4 border border-transparent rounded-md  text-sm font-medium text-white ${
							!!formErrors || !!serverError
								? 'bg-gray-300 cursor-not-allowed'
								: 'bg-black text-gray-300 border-2 border-indigo-950  hover:bg-violet-800 hover:shadow-[10px_10px_8px_-4px_#78f5da]'
						}`}
					>
						Авторизоваться
					</Button>
					<Button
						className="w-full py-2 px-4  border-transparent rounded-md  text-sm font-medium
								 bg-black text-white border-2 border-indigo-950  hover:bg-violet-800 hover:shadow-[10px_10px_8px_-4px_#78f5da]
						"
					>
						<Link to="/register">Регистрация</Link>
					</Button>
				</form>
			</div>
		</div>
	);
};
