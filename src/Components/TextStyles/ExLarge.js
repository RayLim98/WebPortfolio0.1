import styled from 'styled-components'
import { exLarge } from './textconstants'

const ExLargeText = styled.h2`
  color: ${props => props.color || 'white'};
  font-size: ${exLarge}rem;
`

export default ExLargeText