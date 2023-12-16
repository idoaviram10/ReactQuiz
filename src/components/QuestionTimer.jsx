import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
	const [remainingTime, setRemainingTime] = useState(timeout);

	useEffect(() => {
		const timer = setTimeout(onTimeout, timeout);

		return () => {
			clearTimeout(timer);
		};
	}, [onTimeout, timeout, mode]);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
		}, 10);

		return () => {
			clearInterval(interval);
		};
	}, []);

	if (mode === '') {
		return <progress id='question-time' value={remainingTime} max={timeout} className={mode} />;
	}

	return <progress id='question-time' value={timeout} max={timeout} className={mode} />;
}
