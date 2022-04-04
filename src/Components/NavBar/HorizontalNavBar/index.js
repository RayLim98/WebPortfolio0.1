import React from 'react'
import { StickyContainer } from './style'
import { useTheme } from '../../../Context/ThemeContext';
import { HoriUl } from '../../List'
import { Item, NavItem } from './style'
import LargeText from '../../TextStyles/LargeText';

export const horiNavHeight = 8;

const navItems = [
	{
		navId: 'home',
		label: 'Home'
	},
	{
		navId: 'about',
		label: 'About'
	},
	{
		navId: 'project',
		label: 'Projects'
	},
	{
		navId: 'contact',
		label: 'Contact'
	},
]

const HorizontalNavBar = () => {
	const { toggleTheme, theme } = useTheme()	
	return (
		<StickyContainer 
			height = {horiNavHeight}
			bgColor = {theme.secondary}
		>
			<HoriUl>
				<li>
					<button onClick={toggleTheme}>
						toggle theme
					</button>
				</li>
				{
					navItems.map((item)=> 
					<Item key={item.navId}>
						<NavItem 
							to={item.navId}
							smooth={true} 
							spy={true} 
							duration={500}
							highLightColor={theme.highLight}
						>
							<LargeText secondary>
								{item.label}
							</LargeText>
						</NavItem>
					</Item>)
				}
			</HoriUl>
		</StickyContainer>
	)
}

export default HorizontalNavBar
