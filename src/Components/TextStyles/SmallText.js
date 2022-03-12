import styled from 'styled-components'

const SmallText = styled.h2`
  color: ${props => props.color || 'white'};
  font-size: 0.8rem;
`

export default SmallText