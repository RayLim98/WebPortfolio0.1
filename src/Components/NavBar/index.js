import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, 
		 NavBarContainer, 	
		 Logo,
		 NavMenu,
		 NavLinkS,
		 Icon,
		 NavBtn,
		 NavBtnLink } from './style'

const Navigation = ({toggle}) => {
	return (
		<Nav>
			<NavBarContainer>
				<Logo to='/'>Logo Here</Logo>
				<Icon onClick={toggle}> 
					<FaBars/>
				</Icon>
				<NavMenu>
					<NavLinkS to='home'>Home</NavLinkS>
					<NavLinkS to='about'>About</NavLinkS>
					<NavLinkS to='contact'>Contact</NavLinkS>
					<NavLinkS to='socials'>Socials</NavLinkS>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/signup'>Contact me</NavBtnLink>
				</NavBtn>
			</NavBarContainer>
		</Nav>
	)
}
// rafce
export default Navigation