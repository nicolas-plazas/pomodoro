import Head from 'next/head';
import { useState } from 'react';
// Components
import Options from '@/components/Options';
import Clock from '@/components/Clock';
import Button from '@/components/Button';
// utils
import { getColorByOption, getTimeByOption } from '@/utils';
// types
import { OptionsType } from '@/types/OptionsType';
// hooks
import { useTimer, useDeviceWidth } from '@/hooks';

export default function Home() {
	const deviceWidth = useDeviceWidth();

	const [pomodoro, setPomodoro] = useState({
		selectedOption: 'pomodoro',
		color: 'chestnut',
		isRunning: false,
		startTime: 1500,
		timer: '25:00',
	});

	const handleSelectedOption = (option: OptionsType) => {
		const color = getColorByOption(option);
		const startTime = getTimeByOption(option);

		setPomodoro({
			...pomodoro,
			selectedOption: option,
			color,
			startTime,
			isRunning: false,
		});
	};

	const handleStart = () => {
		setPomodoro({ ...pomodoro, isRunning: !pomodoro.isRunning });
	};

	const currentTimer = useTimer({
		isRunning: pomodoro.isRunning,
		initialTime: pomodoro.startTime,
	});

	return (
		<>
			<Head>
				<title>{currentTimer.formattedTime}</title>
				<meta name='description' content='Pomodoro App' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main
				className={`flex justify-center items-center w-full h-screen px-3 ${
					'bg-' + pomodoro.color
				}`}
			>
				{/* Pomodoro timer */}
				<div className='relative grid grid-cols-1 grid-rows-3 h-96 w-full pt-5 pb-8 bg-white bg-opacity-20 rounded-xl text-white bg-slate max-w-xl shadow-2xl'>
					{/* Lista de opciones */}
					<Options
						deviceWidth={deviceWidth}
						handleSelectedOption={handleSelectedOption}
						selectedOption={pomodoro.selectedOption}
						color={pomodoro.color}
					/>
					{/* Contador */}
					<Clock time={currentTimer.formattedTime} />
					{/* Acciones */}
					<Button
						onClick={handleStart}
						isRunning={pomodoro.isRunning}
						time={currentTimer.timer}
						color={pomodoro.color}
					/>
				</div>
			</main>
		</>
	);
}
