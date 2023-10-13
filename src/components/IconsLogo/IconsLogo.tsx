import { FiCircle } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

const IconsLogo: React.FC = () => {
	return (
		<div className='flex gap-[6px]'>
			<RxCross2
				size={'32px'}
				color={'#31c3bd'}
			/>
			<FiCircle
				size={'32px'}
				color={'#ffc860'}
			/>
		</div>
	);
};

export default IconsLogo;
