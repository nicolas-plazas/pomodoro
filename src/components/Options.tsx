// types
import { OptionsType } from '@/types/OptionsType';
interface OptionsProps {
	deviceWidth: number;
	selectedOption: string;
	handleSelectedOption: (option: OptionsType) => void;
	color: string;
}

const Options = (props: OptionsProps) => {
	const { deviceWidth, selectedOption, handleSelectedOption, color } = props;

	const isSmallDevice = deviceWidth <= 360;
	const options = [
		{
			id: 'pomodoro',
			name: isSmallDevice ? 'Pomo' : 'Pomodoro',
		},
		{
			id: 'short',
			name: isSmallDevice ? 'Short' : 'Short Break',
		},
		{
			id: 'long',
			name: isSmallDevice ? 'Long' : 'Long Break',
		},
	];

	return (
		<ul className='flex justify-center items-center w-full'>
			{options.map((option, i) => (
				<li key={i} className='mx-1 text-lg font-medium'>
					<button
						className={`py-2 px-2 rounded-md outline-none ${
							selectedOption === option.id && 'bg-' + color
						}`}
						onClick={() => handleSelectedOption(option.id as OptionsType)}
					>
						{option.name}
					</button>
				</li>
			))}
		</ul>
	);
};

export default Options;
