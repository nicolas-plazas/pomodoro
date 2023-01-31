import { useState, useEffect } from 'react';

interface ButtonProps {
	onClick: () => void;
	isRunning: boolean;
	time: number;
	color: string;
}

const Button = (props: ButtonProps) => {
	const { onClick, isRunning, time, color } = props;

	return (
		<div className={`flex justify-center items-center text-${color}`}>
			<button
				onClick={onClick}
				className='py-3 px-16 text-2xl font-bold rounded-2xl bg-slate-100 uppercase outline-none shadow-md'
			>
				{isRunning && time ? 'Pause' : 'Start'}
			</button>
		</div>
	);
};

export default Button;
