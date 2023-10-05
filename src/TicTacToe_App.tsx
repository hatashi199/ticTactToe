import Board from "./components/Board/Board";
import GameConfig from "./components/GameConfig/GameConfig";
import { useGameConfigTurn } from "./components/GameConfig/useGameConfigTurn";
import ModalAlert from "./components/ModalAlert/ModalAlert";

const TicTacToe_App: React.FC = () => {
	const { ...gameConfig } = useGameConfigTurn();

	return (
		<>
			{!gameConfig.gameConfigTurn && (
				<ModalAlert>
					<GameConfig setGameConfigO={gameConfig.setGameConfigO} setGameConfigX={gameConfig.setGameConfigX}/>
				</ModalAlert>
			)}
			<Board gameConfig={gameConfig}/>
			{gameConfig.gameConfigTurn && <h2>{`Turno de ${gameConfig.gameConfigTurn}`}</h2>}
		</>
	);
};

export default TicTacToe_App;
