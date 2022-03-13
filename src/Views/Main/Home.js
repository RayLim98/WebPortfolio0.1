import PageWrapper from '../../Components/Containers/Wrappers/PageWrapper'
import HeadingText from '../../Components/TextStyles/HeadingText'
import { horiNavHeight } from '../../Components/NavBar/HorizontalNavBar'
import { useTheme } from '../../Context/ThemeContext'
import { FlexDiv } from '../../Components/Containers/Wrappers/style'

const Home = () => {
	const { theme } = useTheme()
	return ( 
		<PageWrapper 
			id="home" 
			height = {100 - horiNavHeight} 
			backgroundColor = { theme.primary }
			style={{flexDirection: 'column'}}
		>
			<FlexDiv flex={2}>
				<FlexDiv>
					<HeadingText>
						Hello and welcome
					</HeadingText>
				</FlexDiv>
				<FlexDiv>
					image
				</FlexDiv>
			</FlexDiv>
			<FlexDiv style={{flexDirection: 'column-reverse', alignItems: 'center',}}>
				<HeadingText>
					Raymond Lim
				</HeadingText>
			</FlexDiv>
		</PageWrapper>
	)
}

export default Home
