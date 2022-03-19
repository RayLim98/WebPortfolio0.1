import styled from 'styled-components'
import { useTheme } from '../../Context/ThemeContext'
import { exLarge, transition } from './textconstants'

const StyledH2 = styled.h2`
  color: ${props => props.color || 'white'};
  text-align: center;
  font-size: ${exLarge}rem;
  transition: color ease-in ${transition}s;
`

const ExLargeText = ({children, secondary}) => {
  const { theme } = useTheme()
  return (
    <StyledH2 color = { secondary? theme.textSecondary : theme.textPrimary }>
      {children}
    </StyledH2>
  )
}

export default ExLargeText
