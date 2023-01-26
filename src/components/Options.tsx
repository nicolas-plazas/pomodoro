const Options = () => {
	const options = ['Pomodoro', 'Short Break', 'Long break'];

	return (
		<ul className='flex justify-between w-full'>
			{options.map((options, i) => (
				<li key={i} className='text-lg font-medium'>
					{options}
				</li>
			))}
		</ul>
	);
};

export default Options;
