import styled from 'styled-components'
import { medium, transition } from './textconstants'
import { useTheme } from '../../Context/ThemeContext'

const StyledH4 = styled.h4`
  color: ${props => props.color || 'white'};
  font-size: ${medium}rem;
  transition: color ease-in ${transition}s;
`

const MediumText = ({children, secondary}) => {
  const { theme } = useTheme()
  return (
    <StyledH4 color = { secondary? theme.textSecondary : theme.textPrimary }>
      {children}
    </StyledH4>
  )
}

export default MediumText
