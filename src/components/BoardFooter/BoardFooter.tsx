interface BoardFooterProps {
	winO: number;
	winX: number;
	draw: number;
}

const BoardFooter: React.FC<BoardFooterProps> = ({ winO, winX, draw }) => {
	return (
		<div className='flex items-center gap-[10px] w-full'>
			<div className='flex flex-col flex-1 justify-center items-center bg-circleColor rounded-[10px] p-[14px]'>
				<span className='text-center'>Jugador O</span>
				<span className='text-center'>{winO}</span>
			</div>
			<div className='flex flex-col flex-1 justify-center items-center bg-textDark rounded-[10px] p-[14px]'>
				<span className='text-center'>Empate</span>
				<span className='text-center'>{draw}</span>
			</div>
			<div className='flex flex-col flex-1 justify-center items-center bg-crossColor rounded-[10px] p-[14px]'>
				<span className='text-center'>Jugador X</span>
				<span className='text-center'>{winX}</span>
			</div>
		</div>
	);
};

export default BoardFooter;
