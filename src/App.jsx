import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { NotFound } from './components/content/not-found/NotFound';
import { Authorization } from './pages';

const Content = ({ className, children }) => (
	<main className={className}>{children}</main>
);

export const App = () => {
	return (
		<div className="flex flex-col justify-between w-[1000px] min-h-full mx-auto bg-slate-50 text-gray-900 ">
			<Header />
			<Content className="flex-1 container mx-auto  bg-teal-100 shadow-lg rounded-lg ">
				<Routes>
					<Route
						path="/"
						element={
							<h3 className="text-lg font-medium text-blue-500">
								Главная страница
							</h3>
						}
					/>
					<Route
						path="/login"
						element={<Authorization />}
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
						element={<NotFound />}
					/>
				</Routes>
			</Content>

			<Footer />
		</div>
	);
};
