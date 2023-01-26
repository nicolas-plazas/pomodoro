import { useEffect } from 'react';

interface ClockProps {
	time: number;
}

const Clock = ({ time }: ClockProps) => {
	const millisecondsToMinutes = (milliseconds: number) => {
		const minutes = Math.trunc(milliseconds / 60);
		const seconds = milliseconds % 60;

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	};

	return (
		<div className='text-8xl text-center text-chestnut-500'>
			<h1 className='font-bold'>{millisecondsToMinutes(time)}</h1>
		</div>
	);
};

export default Clock;
