import React from 'react'
import { StickyContainer } from './style'
import { HoriUl} from '../../List'
import {Item, NavItem} from './style'

const HorizontalNavBar = () => {
	return (
		<StickyContainer>
			<HoriUl>
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