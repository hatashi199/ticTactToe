import IconsLogo from '../IconsLogo/IconsLogo';
import { IoRefresh } from 'react-icons/io5';

interface IconsLogoProps {
	gameConfigTurn: string;
	resetAllGame: () => void;
}

const BoardHeader: React.FC<IconsLogoProps> = ({
	gameConfigTurn,
	resetAllGame
}) => {
	return (
		<div className='flex items-center justify-between w-full'>
			<IconsLogo />
			<div className='flex justify-center items-center bg-bgSquare shadow-blackShadow rounded-[10px] px-[20px] py-[10px]'>
				<h3 className='text-textDark font-bold'>
					{gameConfigTurn
						? `Turno de ${gameConfigTurn}`
						: `Turno de NADIE`}
				</h3>
			</div>
			<button
				className='flex justify-center items-center bg-textDark rounded-[10px] p-[14px] shadow-greyShadow'
				onClick={resetAllGame}
			>
				<IoRefresh
					size={'22px'}
					color={'#1f3641'}
				/>
			</button>
		</div>
	);
};

export default BoardHeader;
