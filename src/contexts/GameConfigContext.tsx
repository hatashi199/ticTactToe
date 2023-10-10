import { createContext, useState } from 'react';

interface GameConfigContextInterface {
	gameConfigTurn: string;
	setGameConfigO: () => void;
	setGameConfigX: () => void;
}

interface GameConfigProviderProps {
	children: React.ReactNode;
}

export const GameConfigContext = createContext<GameConfigContextInterface>({
	gameConfigTurn: '',
	setGameConfigO: () => {},
	setGameConfigX: () => {}
});

export const GameConfigProvider: React.FC<GameConfigProviderProps> = ({
	children
}) => {
	const [gameConfigTurn, setGameConfigTurn] = useState<string>('');

	const setGameConfigO = (): void => setGameConfigTurn('O');
	const setGameConfigX = (): void => setGameConfigTurn('X');

	const contextValues: GameConfigContextInterface = {
		gameConfigTurn,
		setGameConfigO,
		setGameConfigX
	};

	return (
		<GameConfigContext.Provider value={contextValues}>
			{children}
		</GameConfigContext.Provider>
	);
};
