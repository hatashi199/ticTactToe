import { FiCircle } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

interface GameConfigProps {
	gameConfigTurn: string;
	setGameConfigO: () => void;
	setGameConfigX: () => void;
}

const GameConfig: React.FC<GameConfigProps> = ({
	gameConfigTurn,
	setGameConfigO,
	setGameConfigX
}) => {
	return (
		<div className='flex flex-col gap-[20px] items-center bg-bgSquare rounded-[10px] p-[24px] shadow-blackShadow'>
			<h3 className='text-textDark font-bold uppercase'>
				Selecciona el símbolo de jugador 1
			</h3>
			<div className='flex gap-[10px] w-[100%]'>
				<button
					className='flex flex-1 justify-center items-center bg-textDark px-[30px] py-[10px] rounded-[10px]'
					onClick={setGameConfigO}
				>
					<FiCircle
						size={'32px'}
						color={'#22323a'}
					/>
				</button>
				<button
					className='flex flex-1 justify-center items-center bg-textDark px-[30px] py-[10px] rounded-[10px]'
					onClick={setGameConfigX}
				>
					<RxCross2
						size={'32px'}
						color={'#22323a'}
					/>
				</button>
			</div>
			<h3 className='text-subtextDark font-bold uppercase'>
				{`Recuerda: ${gameConfigTurn} va primero`}
			</h3>
		</div>
	);
};

export default GameConfig;
