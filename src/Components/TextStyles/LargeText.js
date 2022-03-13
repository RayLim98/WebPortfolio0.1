import styled from 'styled-components'
import { large } from './textconstants'

const LargeText = styled.h2`
  color: ${props => props.color || 'white'};
  font-size: ${large}rem;
`

export default LargeText