import React from 'react'
import PageWrapper from '../../Components/Containers/Wrappers/PageWrapper'
import HeadingText from '../../Components/TextStyles/HeadingText'
import { horiNavHeight } from '../../Components/NavBar/HorizontalNavBar'
import { useTheme } from '../../Context/ThemeContext'

const Home = () => {
	const { theme } = useTheme()
	return ( 
		<PageWrapper id="home" height = {100 - horiNavHeight} backgroundColor = {theme.primary}>
			<HeadingText>
				Hello
			</HeadingText>
			<HeadingText>
				&
			</HeadingText>
			<HeadingText>
				Welcome
			</HeadingText>
		</PageWrapper>
	)
}

export default Home