import styled from 'styled-components'
import { useTheme } from '../../Context/ThemeContext'
import { small } from './textconstants'

const StyledH5 = styled.h5`
  color: ${props => props.color || 'white'};
  font-size: ${small}rem;
`

const SmallText = ({children}) => {
  const { theme } = useTheme()
  return (
    <StyledH5 color={theme.textPrimary}>
      {children}
    </StyledH5>
  )
}

export default SmallText
