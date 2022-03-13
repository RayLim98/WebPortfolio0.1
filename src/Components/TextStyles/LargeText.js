import styled from 'styled-components'
import { useTheme } from '../../Context/ThemeContext'
import { large } from './textconstants'

const StyledH3 = styled.h3`
  color: ${props => props.color || 'white'};
  font-size: ${large}rem;
`

const LargeText = ({children}) => {
  const { theme } = useTheme()
  return (
    <StyledH3 color={theme.textPrimary}>
      {children}
    </StyledH3>
  )
}

export default LargeText
