import styled from 'styled-components'
import { useTheme } from '../../Context/ThemeContext'
import { exLarge } from './textconstants'

const StyledH2 = styled.h2`
  color: ${props => props.color || 'white'};
  text-align: center;
  font-size: ${exLarge}rem;
`

const ExLargeText = ({children}) => {
  const { theme } = useTheme()
  return (
    <StyledH2 color={theme.textPrimary}>
      {children}
    </StyledH2>
  )
}

export default ExLargeText