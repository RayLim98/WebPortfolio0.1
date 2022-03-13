import React from 'react'
import { StickyContainer } from './style'
import { HoriUl} from '../../List'
import {Item, NavItem} from './style'
import { useTheme } from '../../../Context/ThemeContext';

export const horiNavHeight = 8;

const HorizontalNavBar = () => {
	const { toggleTheme } = useTheme()	
	return (
		<StickyContainer height = {horiNavHeight}>
			<HoriUl>
				<li>
					<button onClick={toggleTheme}>
						toggle theme
					</button>
				</li>
				<Item>
					<NavItem to="home" smooth={true} spy={true} duration={500}>Home</NavItem>
				</Item>
				<Item>
					<NavItem to="projects" smooth={true} spy={true} duration={500}>Projects</NavItem>
				</Item>
				<Item>
					<NavItem to="contact" smooth={true} spy={true} duration={500}>Contact</NavItem>
				</Item>
			</HoriUl>
		</StickyContainer>
	)
}
// rafce
export default HorizontalNavBar