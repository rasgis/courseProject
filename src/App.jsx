import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';

const Footer = ({ className }) => <footer className={className}>Footer</footer>;
const Content = ({ className, children }) => (
	<main className={className}>{children}</main>
);

export const App = () => {
	return (
		<div className="flex flex-col justify-between w-[1000px] min-h-full mx-auto bg-slate-50 text-gray-900">
			<Header />
			<Content className="flex-1 container mx-auto  bg-yellow-100 shadow-lg rounded-lg mb-5 pt-[130px]">
				<h2 className="text-2xl font-semibold mb-4">Content page</h2>
				<Routes>
					<Route
						path="/"
						element={
							<h3 className="text-lg font-medium text-blue-500 h-[2000px]">
								Главная страница
							</h3>
						}
					/>
					<Route
						path="/login"
						element={
							<h3 className="text-lg font-medium text-green-500">
								Авторизация
							</h3>
						}
					/>
					<Route
						path="/register"
						element={
							<h3 className="text-lg font-medium text-purple-500">
								Регистрация
							</h3>
						}
					/>
					<Route
						path="/users"
						element={
							<h3 className="text-lg font-medium text-orange-500">
								Страница пользователей
							</h3>
						}
					/>
					<Route
						path="/post/:postId"
						element={
							<h3 className="text-lg font-medium text-red-500">Статьи</h3>
						}
					/>
					<Route
						path="/post"
						element={
							<h3 className="text-lg font-medium text-indigo-500">
								Новая Статья
							</h3>
						}
					/>
					<Route
						path="*"
						element={
							<h3 className="text-lg font-medium text-gray-500">
								404 — Страница не найдена
							</h3>
						}
					/>
				</Routes>
			</Content>

			<Footer className="bg-gray-800 text-white p-4 text-center text-sm " />
		</div>
	);
};
