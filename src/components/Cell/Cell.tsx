import { FiCircle } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

interface CellProps {
	value: string | null;
	setValue: () => void;
}

const Cell: React.FC<CellProps> = ({ value, setValue }) => {
	return (
		<div
			className='flex justify-center items-center bg-bgSquare shadow-blackShadow rounded-[15px] w-[140px] h-[140px] cursor-pointer'
			onClick={setValue}
		>
			{value === 'O' && (
				<FiCircle
					size={'64px'}
					color={'#ffc860'}
				/>
			)}
			{value === 'X' && (
				<RxCross2
					size={'64px'}
					color={'#31c3bd'}
				/>
			)}
		</div>
	);
};

export default Cell;
