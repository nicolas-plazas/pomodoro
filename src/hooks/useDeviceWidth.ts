import { useState, useEffect } from 'react';

const useDeviceWidth = () => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
        if (typeof window !== 'undefined') {
			const handleResize = () => setWidth(window?.innerWidth);

			window.addEventListener('resize', handleResize);
            // Call the function to set the initial width
            handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	return width;
};

export default useDeviceWidth;
