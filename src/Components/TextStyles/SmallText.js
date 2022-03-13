import styled from 'styled-components'
import { small } from './textconstants'

const SmallText = styled.h2`
  color: ${props => props.color || 'white'};
  font-size: ${small}rem;
`

export default SmallText