interface ClockProps {
	time: string;
}

const Clock = ({ time }: ClockProps) => {
	return (
		<div className='text-8xl text-center text-white'>
			<h1 className='font-black'>{time}</h1>
		</div>
	);
};

export default Clock;
