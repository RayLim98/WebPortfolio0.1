import { useTheme } from '../../Context/ThemeContext'
import PageWrapper from '../../Components/Containers/Wrappers/PageWrapper';
import HeadingText from '../../Components/TextStyles/HeadingText';

const Projects = () => {
	const { theme } = useTheme();
	return ( 
		<PageWrapper id="project" backgroundColor={theme.primary}>
			<HeadingText>
				Projects
			</HeadingText>
		</PageWrapper>
	 )
}

export default Projects