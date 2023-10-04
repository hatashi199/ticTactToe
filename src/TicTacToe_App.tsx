import Board from "./components/Board/Board";
import GameConfig from "./components/GameConfig/GameConfig";
import ModalAlert from "./components/ModalAlert/ModalAlert";

const TicTacToe_App: React.FC = () => {
	return (
		<>
			<ModalAlert>
				<GameConfig/>
			</ModalAlert>
			<Board/>
		</>
	);
};

export default TicTacToe_App;
