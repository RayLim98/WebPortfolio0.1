import styled from 'styled-components'
import { useTheme } from '../../Context/ThemeContext'
import { small, transition } from './textconstants'

const StyledH5 = styled.h5`
  color: ${props => props.color || 'white'};
  font-size: ${small}rem;
  transition: color ease-in ${transition}s;
`

const SmallText = ({children, secondary}) => {
  const { theme } = useTheme()
  return (
    <StyledH5 color = { secondary? theme.textSecondary : theme.textPrimary }>
      {children}
    </StyledH5>
  )
}

export default SmallText
