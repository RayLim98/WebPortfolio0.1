import React from 'react'
import StyledPage from '../../Components/Containers/Wrappers/PageWrapper'
import { useTheme } from '../../Context/ThemeContext'

const Project = () => {
	const { theme } = useTheme();
	return ( 
		<StyledPage id="projects" backgroundColor={theme.primary}>
			Projects
		</StyledPage>
	 )
}

export default Project