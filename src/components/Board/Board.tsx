import Cell from '../Cell/Cell';
import { GameConfigTurnInterface } from '../GameConfig/useGameConfigTurn';
import { useBoardGame } from './useBoardGame';

interface BoardProps {
	gameConfig: GameConfigTurnInterface;
}

const Board: React.FC<BoardProps> = ({ gameConfig }) => {
	const { place_O, place_X, checkWin, isFinished, board } = useBoardGame();

	const makeMovement = (position: number): void => {
		const isValidPosition = position >= 0 && position > 8;

		if (!isValidPosition && !isFinished) {
			switch (gameConfig.gameConfigTurn) {
				case 'O':
					place_O({ position });

					if (checkWin()) {
						console.log('Juego finalizado');
					}

					gameConfig.setGameConfigX();
					break;
				case 'X':
					place_X({ position });

					if (checkWin()) {
						console.log('Juego finalizado');
					}

					gameConfig.setGameConfigO();
					break;
				default:
					console.log('Error');
			}
		}
	};

	return (
		<div className='flex flex-wrap max-w-[350px] w-full gap-[15px]'>
			<Cell
				value={board[0]}
				setValue={() => makeMovement(0)}
			/>
			<Cell
				value={board[1]}
				setValue={() => makeMovement(1)}
			/>
			<Cell
				value={board[2]}
				setValue={() => makeMovement(2)}
			/>
			<Cell
				value={board[3]}
				setValue={() => makeMovement(3)}
			/>
			<Cell
				value={board[4]}
				setValue={() => makeMovement(4)}
			/>
			<Cell
				value={board[5]}
				setValue={() => makeMovement(5)}
			/>
			<Cell
				value={board[6]}
				setValue={() => makeMovement(6)}
			/>
			<Cell
				value={board[7]}
				setValue={() => makeMovement(7)}
			/>
			<Cell
				value={board[8]}
				setValue={() => makeMovement(8)}
			/>
		</div>
	);
};

export default Board;
