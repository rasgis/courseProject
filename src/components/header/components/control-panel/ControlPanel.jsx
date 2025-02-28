import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../button/Button';

export const ControlPanel = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className="flex justify-end p-2">
				<Button>
					<Link
						className="border-2 border-black px-2  rounded-lg hover:border-indigo-400"
						to="/login"
					>
						Войти
					</Link>
				</Button>
			</div>
			<div className="flex justify-between">
				<button
					onClick={() => navigate(-1)}
					className="fa fa-backward"
					aria-hidden="true"
				></button>

				<Link
					to="/post"
					className="fa fa-file-text-o"
					aria-hidden="true"
				></Link>

				<Link
					to="/users"
					className="fa fa-users"
					aria-hidden="true"
				></Link>
			</div>
		</div>
	);
};
