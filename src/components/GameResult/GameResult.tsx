import { Link } from 'react-router-dom';
import ModalInfo from '../ModalInfo/ModalInfo';

interface GameResultProps {
	resultMessage: string;
	resetGame: () => void;
}

const GameResult: React.FC<GameResultProps> = ({
	resultMessage,
	resetGame
}) => {
	return (
		<ModalInfo>
			<div className='flex flex-col items-center gap-[15px] my-[40px]'>
				<span className='text-circleColor text-[2rem] font-bold uppercase'>
					{resultMessage}
				</span>
				<div className='flex flex-col gap-[10px]'>
					<Link
						to='/'
						className='flex justify-center items-center bg-textDark text-bgDark font-bold text-[1.5rem] rounded-[10px] px-[30px] pb-[8px] shadow-greyShadow text-center uppercase'
					>
						Salir
					</Link>
					<button
						className='flex justify-center items-center bg-circleColor text-bgDark font-bold text-[1.5rem] rounded-[10px] px-[30px] pb-[8px] shadow-yellowShadow text-center uppercase'
						onClick={resetGame}
					>
						Siguiente Ronda
					</button>
				</div>
			</div>
		</ModalInfo>
	);
};

export default GameResult;
