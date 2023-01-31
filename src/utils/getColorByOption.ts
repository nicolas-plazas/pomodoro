import { OptionsType } from '@/types/OptionsType';

const getColorByOption = (selectedOption: OptionsType): string => {
	const colors = {
		pomodoro: 'chestnut',
		short: 'paradiso',
		long: 'calypso',
	};

	return colors[selectedOption] || 'chestnut';
};

export { getColorByOption };
