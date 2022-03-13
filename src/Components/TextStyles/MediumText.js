import styled from 'styled-components'
import { medium } from './textconstants'
import { useTheme } from '../../Context/ThemeContext'

const StyledH4 = styled.h4`
  color: ${props => props.color || 'white'};
  font-size: ${medium}rem;
`

const MediumText = ({children}) => {
  const { theme } = useTheme()
  return (
    <StyledH4 color={theme.textPrimary}>
      {children}
    </StyledH4>
  )
}

export default MediumText
