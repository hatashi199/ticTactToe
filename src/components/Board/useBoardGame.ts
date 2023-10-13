import { useState } from 'react';
import { PlacePieceInterface } from './BoardInterfaces';
import { INITIAL_BOARD, winConditions } from '../../appConst';

interface BoardGameInterface {
	place_O: ({ position }: PlacePieceInterface) => void;
	place_X: ({ position }: PlacePieceInterface) => void;
	checkWin: () => boolean;
	resetGame: () => void;
	isFinished: boolean;
	board: (string | null)[];
}

export const useBoardGame = (): BoardGameInterface => {
	const [board, setBoard] = useState<(null | string)[]>(INITIAL_BOARD);
	const [isFinished, setIsFinished] = useState<boolean>(false);

	const place_O = ({ position }: PlacePieceInterface) => {
		board[position] = 'O';
		setBoard([...board]);
	};

	const place_X = ({ position }: PlacePieceInterface) => {
		board[position] = 'X';
		setBoard([...board]);
	};

	const checkWin = (): boolean => {
		const hasWinner: undefined | number[] = winConditions.find(
			([x, y, z]) =>
				board[x] === board[y] &&
				board[x] === board[z] &&
				board[x] !== null
		);

		if (hasWinner) {
			setIsFinished(true);
			return true;
		}

		return false;
	};

	const resetGame = (): void => {
		setBoard(Array(9).fill(null));
		setIsFinished(false);
	};

	return {
		place_O,
		place_X,
		checkWin,
		resetGame,
		isFinished,
		board
	};
};
