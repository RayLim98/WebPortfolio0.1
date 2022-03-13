import styled from 'styled-components'
import { headingText } from './textconstants'

const HeadingText = styled.h1`
  color: ${props => props.color || 'white'};
  font-size: ${headingText}rem;
`

export default HeadingText