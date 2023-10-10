import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';

const TicTacToe_App: React.FC = () => {
	return (
		<>
			<Routes>
				{routes.map((route) => (
					<Route
						path={route.path}
						element={<route.page />}
						key={route.label}
					/>
				))}
			</Routes>
		</>
	);
};

export default TicTacToe_App;
