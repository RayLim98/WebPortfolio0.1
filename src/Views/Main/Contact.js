import React from 'react'
import PageWrapper from '../../Components/Containers/Wrappers/PageWrapper'
import { useTheme } from '../../Context/ThemeContext'

const Contact = () => {
	const { theme } = useTheme();
	return ( 
		<PageWrapper id="contact" backgroundColor={theme.primary}>
			Contact
		</PageWrapper>
	 )
}

export default Contact