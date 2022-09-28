import styled from 'styled-components'
import { useTheme } from '../../Context/ThemeContext'
import { headingText, transition} from './textconstants'
import { midground_z } from '../Containers/zIndex'

const StyledH1 = styled.h1`
  color: ${props => props.color || 'white'};
  font-size: ${headingText}rem;
  transition: color ease-in ${transition}s;
  z-index: ${midground_z};
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
