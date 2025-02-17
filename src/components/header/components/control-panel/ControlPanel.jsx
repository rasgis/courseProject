export const ControlPanel = () => {
	return (
		<div>
			<div className="flex justify-end p-2">
				<button>Войти</button>
			</div>
			<div className="flex justify-between">
				<button>
					<i
						className="fa fa-backward"
						aria-hidden="true"
					></i>
				</button>
				<button>
					<i
						className="fa fa-file-text-o"
						aria-hidden="true"
					></i>
				</button>
				<button>
					<i
						className="fa fa-users"
						aria-hidden="true"
					></i>
				</button>
			</div>
		</div>
	);
};
