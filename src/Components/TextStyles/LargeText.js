import styled from 'styled-components'
import { useTheme } from '../../Context/ThemeContext'
import { large, transition } from './textconstants'

const StyledH3 = styled.h3`
  color: ${props => props.color || 'white'};
  font-size: ${large}rem;
  transition: color ease-in ${transition}s;
`

const LargeText = ({children, secondary}) => {
  const { theme } = useTheme()
  return (
    <StyledH3 color = { !secondary? theme.textPrimary :theme.textSecondary }>
      {children}
    </StyledH3>
  )
}

export default LargeText
