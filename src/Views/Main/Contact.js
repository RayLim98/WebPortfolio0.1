import React from 'react'
import StyledPage from '../../Components/Containers/Wrappers/PageWrapper'
import { useTheme } from '../../Context/ThemeContext'

const Contact = () => {
	const { theme } = useTheme();
	return ( 
		<StyledPage id="contact" backgroundColor={theme.primary}>
			Contact
		</StyledPage>
	 )
}

export default Contact