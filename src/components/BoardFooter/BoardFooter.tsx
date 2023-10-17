interface BoardFooterProps {
	winO: number;
	winX: number;
	draw: number;
}

const BoardFooter: React.FC<BoardFooterProps> = ({ winO, winX, draw }) => {
	return (
		<div className='flex items-center gap-[10px] w-full'>
			<div className='flex flex-col flex-1 justify-center items-center bg-circleColor rounded-[10px] p-[14px] shadow-yellowShadow'>
				<span className='text-center text-bgDark font-bold text-[1.2rem] uppercase'>
					Jugador O
				</span>
				<span className='text-center text-bgDark font-bold text-[1.2rem]'>
					{winO}
				</span>
			</div>
			<div className='flex flex-col flex-1 justify-center items-center bg-textDark rounded-[10px] p-[14px] shadow-greyShadow'>
				<span className='text-center text-bgDark font-bold text-[1.2rem] uppercase'>
					Empate
				</span>
				<span className='text-center text-bgDark font-bold text-[1.2rem]'>
					{draw}
				</span>
			</div>
			<div className='flex flex-col flex-1 justify-center items-center bg-crossColor rounded-[10px] p-[14px] shadow-blueShadow'>
				<span className='text-center text-bgDark font-bold text-[1.2rem] uppercase'>
					Jugador X
				</span>
				<span className='text-center text-bgDark font-bold text-[1.2rem]'>
					{winX}
				</span>
			</div>
		</div>
	);
};

export default BoardFooter;
