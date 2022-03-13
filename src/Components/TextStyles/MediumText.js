import styled from 'styled-components'
import { medium } from './textconstants'

const MediumText = styled.h2`
  color: ${props => props.color || 'white'};
  font-size: ${medium}rem;
`

export default MediumText