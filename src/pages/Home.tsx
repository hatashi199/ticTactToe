import { Link } from 'react-router-dom';
import CenterPageElement from '../components/CenterPageElement/CenterPageElement';
import { RxCross2 } from 'react-icons/rx';
import { FiCircle } from 'react-icons/fi';
import GameConfig from '../components/GameConfig/GameConfig';
import { useContext } from 'react';
import { GameConfigContext } from '../contexts/GameConfigContext';

const Home: React.FC = () => {
	const { gameConfigTurn, setGameConfigX, setGameConfigO } =
		useContext(GameConfigContext);

	return (
		<CenterPageElement>
			<div className='flex flex-col items-center gap-[15px] p-[15px]'>
				<div className='flex gap-[10px]'>
					<RxCross2 />
					<FiCircle />
				</div>
				<GameConfig
					setGameConfigO={setGameConfigO}
					setGameConfigX={setGameConfigX}
				/>
				{gameConfigTurn ? (
					<Link to='/game'>NEW GAME</Link>
				) : (
					<span>NEW GAME</span>
				)}
			</div>
		</CenterPageElement>
	);
};

export default Home;
