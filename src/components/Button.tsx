import { useState, useEffect } from 'react';

interface ButtonProps {
    onClick: () => void;
    isRunning: boolean;
}

const Button = (props: ButtonProps) => {
    const { onClick, isRunning } = props;

	return (
		<div className='flex justify-center items-center text-chestnut'>
			<button onClick={onClick} className='py-3 px-16 text-2xl font-bold rounded-2xl bg-slate-100 uppercase'>
				{isRunning ? 'Stop' : 'Start'}
			</button>
		</div>
	);
};

export default Button;
