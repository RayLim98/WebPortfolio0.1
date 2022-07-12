import { useTheme } from '../../Context/ThemeContext'
import PageWrapper from '../../Components/Containers/Wrappers/PageWrapper';
import HeadingText from '../../Components/TextStyles/HeadingText';
import FlexConWrapper from '../../Components/Containers/Wrappers/FlexConWrapper';
import MediumText from '../../Components/TextStyles/MediumText';

const summery = 'A geek, nerd, and a keyboard enthusiast :O ';

const About = () => {
	const { theme } = useTheme();
	return ( 
		<PageWrapper id="about" backgroundColor={theme.primary}>
			<HeadingText>
				About
			</HeadingText>
			<FlexConWrapper bgColor='blue'>
				<FlexConWrapper flex={2}>
					<MediumText>
						{summery}
					</MediumText>
				</FlexConWrapper>
				<FlexConWrapper>
					<MediumText>
						Photo here?
					</MediumText>
				</FlexConWrapper>
			</FlexConWrapper>
		</PageWrapper>
	 )
}

export default About