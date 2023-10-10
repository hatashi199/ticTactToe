interface CenterPageElementProps {
	children: React.ReactNode;
}

const CenterPageElement: React.FC<CenterPageElementProps> = ({ children }) => {
	return (
		<div className='flex justify-center items-center w-[100vw] h-[100vh]'>
			{children}
		</div>
	);
};

export default CenterPageElement;
