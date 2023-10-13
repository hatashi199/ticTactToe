import { Link } from 'react-router-dom';
import CenterPageElement from '../components/CenterPageElement/CenterPageElement';
import GameConfig from '../components/GameConfig/GameConfig';
import { useContext } from 'react';
import { GameConfigContext } from '../contexts/GameConfigContext';
import IconsLogo from '../components/IconsLogo/IconsLogo';

const Home: React.FC = () => {
	const { gameConfigTurn, setGameConfigX, setGameConfigO } =
		useContext(GameConfigContext);

	return (
		<CenterPageElement>
			<div className='flex flex-col items-center gap-[20px] p-[15px]'>
				<IconsLogo />
				<GameConfig
					gameConfigTurn={gameConfigTurn}
					setGameConfigO={setGameConfigO}
					setGameConfigX={setGameConfigX}
				/>
				{gameConfigTurn ? (
					<Link
						to='/game'
						className='flex justify-center items-center w-[100%] bg-[#31c3bd] text-bgDark font-bold text-[1.5rem] rounded-[10px] px-[30px] pb-[8px] shadow-blueShadow'
					>
						NEW GAME
					</Link>
				) : (
					<button
						disabled
						className='flex justify-center items-center w-[100%] bg-[#31c3bd] text-bgDark font-bold text-[1.5rem] rounded-[10px] px-[30px] pb-[8px] shadow-blueShadow'
					>
						NEW GAME
					</button>
				)}
			</div>
		</CenterPageElement>
	);
};

export default Home;
