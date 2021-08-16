import React, {useState} from 'react'
import Navigation from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import HeroCard from '../Components/HeroCard'
const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const toggle = () => {
		setIsOpen(!isOpen)
	}; 

	return ( 
		<div>
			<SideBar isOpen={isOpen} toggle={toggle}/>
			<Navigation toggle={toggle}/>
			<HeroCard></HeroCard>
		</div>
	)
}

export default Home