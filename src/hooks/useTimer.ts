import { useState, useEffect } from 'react';

interface TimerProps {
	initialTime: number;
	isRunning: boolean;
}

export const useTimer = (params: TimerProps) => {
	const { initialTime, isRunning } = params;
	const [time, setTime] = useState(initialTime);

	useEffect(() => {
		if (isRunning && time > 0) {
			const interval = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [isRunning, time]);

	return time;
};
