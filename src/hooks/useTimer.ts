import { useState, useEffect } from 'react';

interface TimerProps {
	initialTime: number;
	isRunning: boolean;
}

const handleGetTime = (currentTimer: number) => {
	const minutes = Math.trunc(currentTimer / 60);
	const seconds = currentTimer % 60;

	return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const useTimer = (params: TimerProps) => {
	const { initialTime, isRunning } = params;
	const [timer, setTimer] = useState(initialTime);

	useEffect(() => {
		setTimer(initialTime);
	}, [initialTime]);

	useEffect(() => {
		if (isRunning && timer > 0) {
			const interval = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1);
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [isRunning, timer]);

	return {
		timer,
		formattedTime: handleGetTime(timer),
	};
};

export default useTimer;
