import { Logo, Discription, ControlPanel } from './components';

export const Header = () => (
	<header className="flex bg-indigo-400 text-slate-700 p-6 mb-5 text-center text-xl font-bold h-[120px] rounded-[5px] shadow-[0px_12px_12px_-4px_#4f46e5] fixed w-[1000px] justify-between">
		<Logo />
		<Discription />
		<ControlPanel />
	</header>
);
