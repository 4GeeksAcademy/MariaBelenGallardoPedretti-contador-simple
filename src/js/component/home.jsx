import React, { useEffect, useState } from "react";

import { Contador } from "./Contador";

//create your first component
const Home = () => {

	const [tiempo, setTiempo] = useState(0);
	
	useEffect(()=>{
		setTimeout(()=>{
			setTiempo(value=> value + 1)
		},1000);
	},[tiempo])
	
	return (
		<main className="text-center">
			<section className="contador-simple">
			<Contador numero={<p className="fa fa-clock"></p>}/>
			<Contador numero={Math.floor(tiempo/100000)%10}/>
			<Contador numero={Math.floor(tiempo/10000)%10}/>
			<Contador numero={Math.floor(tiempo/1000)%10}/>
			<Contador numero={Math.floor(tiempo/100)%10}/>
			<Contador numero={Math.floor(tiempo/10)%10}/>
			<Contador numero={Math.floor(tiempo%10)}/>
			</section>
		</main>
	);
};

export default Home;
