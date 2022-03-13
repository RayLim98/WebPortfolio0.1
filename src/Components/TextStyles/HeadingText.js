import styled from 'styled-components'
import { useTheme } from '../../Context/ThemeContext'
import { headingText } from './textconstants'

const StyledH1 = styled.h1`
  color: ${props => props.color || 'white'};
  /* text-align: center; */
  font-size: ${headingText}rem;
`

const HeadingText = ({children}) => {
  const { theme } = useTheme()
  return (
    <StyledH1 color={theme.textPrimary}>
      {children}
    </StyledH1>
  )
}

export default HeadingText
