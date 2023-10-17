import React from 'react';

interface ModalInfoProps {
	children: React.ReactNode;
}

class ModalInfo extends React.Component<ModalInfoProps> {
	render(): React.ReactNode {
		return (
			<div className='flex items-center fixed z-1 bg-[rgba(0,0,0,0.75)] w-[100vw] h-[100vh]'>
				<div className='flex justify-center bg-bgSquare bg-opacity-[0.85] w-full'>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default ModalInfo;
