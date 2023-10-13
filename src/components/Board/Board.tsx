import { Link } from 'react-router-dom';
import Cell from '../Cell/Cell';
import { GameConfigTurnInterface } from '../GameConfig/useGameConfigTurn';
import { useBoardGame } from './useBoardGame';
import BoardHeader from '../BoardHeader/BoardHeader';

interface BoardProps {
	gameConfig: GameConfigTurnInterface;
}

const Board: React.FC<BoardProps> = ({ gameConfig }) => {
	const { place_O, place_X, checkWin, resetGame, isFinished, board } =
		useBoardGame();

	const makeMovement = (position: number): void => {
		const isValidPosition = position >= 0 && position > 8;

		if (!isValidPosition && !isFinished) {
			switch (gameConfig.gameConfigTurn) {
				case 'O':
					if (board[position] === null) {
						place_O({ position });

						if (checkWin()) {
							console.log('Juego finalizado');
						}

						gameConfig.setGameConfigX();
					}
					break;
				case 'X':
					if (board[position] === null) {
						place_X({ position });

						if (checkWin()) {
							console.log('Juego finalizado');
						}

						gameConfig.setGameConfigO();
					}
					break;
				default:
					console.log('Error');
			}
		}
	};

	return (
		<>
			{gameConfig.gameConfigTurn ? (
				<div className='flex flex-col max-w-[460px] w-full gap-[20px]'>
					<BoardHeader
						gameConfigTurn={gameConfig.gameConfigTurn}
						resetGame={resetGame}
					/>
					<div className='flex flex-wrap w-full gap-[20px]'>
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
				</div>
			) : (
				<div className='max-w-[450px] w-full'>
					<Link
						to='/'
						className='flex justify-center items-center w-[100%] bg-[#31c3bd] text-bgDark font-bold text-[1.5rem] rounded-[10px] px-[30px] pb-[8px] shadow-blueShadow'
					>
						GO HOME
					</Link>
				</div>
			)}
		</>
	);
};

export default Board;
