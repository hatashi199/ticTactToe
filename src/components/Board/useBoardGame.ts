import { useState } from 'react';
import { PlacePieceInterface } from './BoardInterfaces';
import { INITIAL_BOARD, winConditions } from '../../appConst';

interface BoardGameInterface {
	place_O: ({ position }: PlacePieceInterface) => void;
	place_X: ({ position }: PlacePieceInterface) => void;
	checkWin: () => boolean;
	isDraw: () => boolean;
	resetGame: () => void;
	isFinished: boolean;
	board: (string | null)[];
	scoreBoard: ScoreBoardInterface;
	finalResult: string;
}

interface ScoreBoardInterface {
	winO: number;
	winX: number;
	draw: number;
}

export const useBoardGame = (): BoardGameInterface => {
	const [board, setBoard] = useState<(null | string)[]>(INITIAL_BOARD);
	const [isFinished, setIsFinished] = useState<boolean>(false);
	const [winO, setWinO] = useState<number>(0);
	const [winX, setWinX] = useState<number>(0);
	const [draw, setDraw] = useState<number>(0);
	const [finalResult, setFinalResult] = useState<string>('');

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
			board[hasWinner[0]] === 'O' && setWinO((prev) => prev + 1);
			board[hasWinner[0]] === 'X' && setWinX((prev) => prev + 1);
			setIsFinished(true);
			setFinalResult(`El ganador es: ${board[hasWinner[0]]}`);
			return true;
		}

		return false;
	};

	const isDraw = (): boolean => {
		const isDraw: boolean = board.every((cell) => cell !== null);

		if (isDraw) {
			setDraw((prev) => prev + 1);
			setIsFinished(true);
			setFinalResult(`Empate`);
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
		isDraw,
		resetGame,
		isFinished,
		board,
		scoreBoard: {
			winO,
			winX,
			draw
		},
		finalResult
	};
};
