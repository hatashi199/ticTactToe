import { Link } from 'react-router-dom';
import Cell from '../Cell/Cell';
import { GameConfigTurnInterface } from '../GameConfig/useGameConfigTurn';
import { useBoardGame } from './useBoardGame';
import BoardHeader from '../BoardHeader/BoardHeader';
import BoardFooter from '../BoardFooter/BoardFooter';
import GameResult from '../GameResult/GameResult';

interface BoardProps {
	gameConfig: GameConfigTurnInterface;
}

const Board: React.FC<BoardProps> = ({ gameConfig }) => {
	const { ...boardGame } = useBoardGame();

	const makeMovement = (position: number): void => {
		const isValidPosition = position >= 0 && position > 8;

		if (!isValidPosition && !boardGame.isFinished) {
			switch (gameConfig.gameConfigTurn) {
				case 'O':
					if (boardGame.board[position] === null) {
						boardGame.place_O({ position });

						if (boardGame.checkWin()) {
							break;
						}

						if (boardGame.isDraw()) {
							break;
						}

						gameConfig.setGameConfigX();
					}
					break;
				case 'X':
					if (boardGame.board[position] === null) {
						boardGame.place_X({ position });

						if (boardGame.checkWin()) {
							break;
						}

						if (boardGame.isDraw()) {
							break;
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
				<>
					<div className='flex flex-col max-w-[460px] w-full gap-[20px]'>
						<BoardHeader
							gameConfigTurn={gameConfig.gameConfigTurn}
							resetAllGame={boardGame.resetAllGame}
						/>
						<div className='flex flex-wrap w-full gap-[20px]'>
							<Cell
								value={boardGame.board[0]}
								setValue={() => makeMovement(0)}
							/>
							<Cell
								value={boardGame.board[1]}
								setValue={() => makeMovement(1)}
							/>
							<Cell
								value={boardGame.board[2]}
								setValue={() => makeMovement(2)}
							/>
							<Cell
								value={boardGame.board[3]}
								setValue={() => makeMovement(3)}
							/>
							<Cell
								value={boardGame.board[4]}
								setValue={() => makeMovement(4)}
							/>
							<Cell
								value={boardGame.board[5]}
								setValue={() => makeMovement(5)}
							/>
							<Cell
								value={boardGame.board[6]}
								setValue={() => makeMovement(6)}
							/>
							<Cell
								value={boardGame.board[7]}
								setValue={() => makeMovement(7)}
							/>
							<Cell
								value={boardGame.board[8]}
								setValue={() => makeMovement(8)}
							/>
						</div>
						<BoardFooter
							winO={boardGame.scoreBoard.winO}
							winX={boardGame.scoreBoard.winX}
							draw={boardGame.scoreBoard.draw}
						/>
					</div>
					{boardGame.isFinished && (
						<GameResult
							resultMessage={boardGame.finalResult}
							resetGame={boardGame.resetGame}
						/>
					)}
				</>
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
