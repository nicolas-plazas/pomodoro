import { OptionsType } from '@/types/OptionsType';

const getTimeByOption = (option: OptionsType): number => {
	const times = {
		pomodoro: 1500,
		short: 300,
		long: 900,
	};

	return times[option] || 1500;
};

export { getTimeByOption };
