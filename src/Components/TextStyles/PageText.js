import styled from 'styled-components'
import { useTheme } from '../../Context/ThemeContext'
import { exLarge } from './textconstants'

const StyledH2 = styled.h1`
  color: ${props => props.color || 'white'};
  text-align: center;
  font-size: 4rem;
`

const PageText = ({children}) => {
  const { theme } = useTheme()
  return (
    <StyledH2 color={theme.textPrimary}>
      {children}
    </StyledH2>
  )
}

export default PageText