/** @format */

import React, { useEffect, useState } from "react";

const StopWatch = () => {
	const [seconds, setSeconds] = useState(0);
	const [start, setStart] = useState(false);

	useEffect(() => {
    	const id = setInterval(() => {
				console.log("set Interval");
				setSeconds((prev) => prev + 1);
			}, 1000);
		
		return () => {
			clearInterval(id);
		};
	}, [start]);

	return (
		<div>
			<div>{seconds}</div>
			<button onClick={()=> setStart(prev => !prev)}> {start ? "Stop" : "Start"}</button>
		</div>
	);
};

export default StopWatch;
