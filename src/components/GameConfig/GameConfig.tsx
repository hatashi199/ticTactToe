import { FiCircle } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

interface GameConfigProps {
	setGameConfigO: () => void;
	setGameConfigX: () => void;
}

const GameConfig: React.FC<GameConfigProps> = ({
	setGameConfigO,
	setGameConfigX
}) => {
	return (
		<div className='flex flex-col gap-[15px] items-center'>
			<span>Selecciona con que quieres empezar.</span>
			<div className='flex gap-[10px]'>
				<button
					className='bg-white px-[30px] py-[10px] rounded-[10px]'
					onClick={setGameConfigO}
				>
					<FiCircle size={'36px'} />
				</button>
				<button
					className='bg-white px-[30px] py-[10px] rounded-[10px]'
					onClick={setGameConfigX}
				>
					<RxCross2 size={'36px'} />
				</button>
			</div>
		</div>
	);
};

export default GameConfig;
