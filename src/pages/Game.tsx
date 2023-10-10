import { useContext } from 'react';
import Board from '../components/Board/Board';
import CenterPageElement from '../components/CenterPageElement/CenterPageElement';
import { GameConfigContext } from '../contexts/GameConfigContext';

const Game: React.FC = () => {
	const { gameConfigTurn, setGameConfigX, setGameConfigO } =
		useContext(GameConfigContext);

	return (
		<CenterPageElement>
			<Board
				gameConfig={{
					gameConfigTurn,
					setGameConfigO,
					setGameConfigX
				}}
			/>
		</CenterPageElement>
	);
};

export default Game;
