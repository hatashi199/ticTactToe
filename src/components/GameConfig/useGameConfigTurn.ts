import { useState } from 'react';

export interface GameConfigTurnInterface {
	gameConfigTurn: string;
	setGameConfigO: () => void;
	setGameConfigX: () => void;
}

export const useGameConfigTurn = (): GameConfigTurnInterface => {
	const [gameConfigTurn, setGameConfigTurn] = useState<string>('');

	const setGameConfigO = (): void => setGameConfigTurn('O');
	const setGameConfigX = (): void => setGameConfigTurn('X');

	return {
		gameConfigTurn,
		setGameConfigO,
		setGameConfigX
	};
};
