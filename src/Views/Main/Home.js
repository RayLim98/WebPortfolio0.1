import React from 'react'
import PageWrapper from '../../Components/Containers/Wrappers/PageWrapper'
import HeadingText from '../../Components/TextStyles/HeadingText'
import { horiNavHeight } from '../../Components/NavBar/HorizontalNavBar'
import { useTheme } from '../../Context/ThemeContext'
import ContentWrapper from '../../Components/Containers/Wrappers/ContentWrapper'

const Home = () => {
	const { theme } = useTheme()
	return ( 
		<PageWrapper id="home" height = {100 - horiNavHeight} backgroundColor = { theme.primary }>
			<ContentWrapper column>
				<HeadingText>
					Hello
				</HeadingText>
				<HeadingText>
					&
				</HeadingText>
				<HeadingText>
					Welcome
				</HeadingText>
			</ContentWrapper>
			<ContentWrapper column>
			</ContentWrapper>
		</PageWrapper>
	)
}

export default Home