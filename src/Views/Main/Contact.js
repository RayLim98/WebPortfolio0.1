import React from 'react'
import PageWrapper from '../../Components/Containers/Wrappers/PageWrapper'
import LargeText from '../../Components/TextStyles/LargeText';
import { useTheme } from '../../Context/ThemeContext'

const Contact = () => {
	const { theme } = useTheme();
	return ( 
		<PageWrapper id="contact" backgroundColor={theme.primary}>
			<LargeText>
				Contact
			</LargeText>
		</PageWrapper>
	 )
}

export default Contact