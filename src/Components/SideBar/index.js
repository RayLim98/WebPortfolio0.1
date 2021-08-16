import React from 'react'
import {SideBarWrapper,
		SideBarMenu,
		SideBarItems,
		SideBarLink,
		CloseIcon,
		SideBarContainer} from './style'
import { FaTimes } from 'react-icons/fa'

const SideBar = ({isOpen, toggle}) => {
	return (
		<SideBarContainer isOpen ={isOpen}>
			<CloseIcon onClick={toggle}> 
				<FaTimes/> 
			</CloseIcon>
			<SideBarWrapper>
				<SideBarMenu>
					<SideBarItems>
						<SideBarLink to='home' onClick={toggle}>Home</SideBarLink>
					</SideBarItems>
					<SideBarItems>
						<SideBarLink to='about' onClick={toggle}>About</SideBarLink>
					</SideBarItems>
					<SideBarItems>
						<SideBarLink to='stuff' onClick={toggle}>Contact</SideBarLink>
					</SideBarItems>
					<SideBarItems>
						<SideBarLink to='stuff' onClick={toggle}>Socials</SideBarLink>
					</SideBarItems>
				</SideBarMenu>
			</SideBarWrapper>
		</SideBarContainer>
	)
}

export default SideBar 
