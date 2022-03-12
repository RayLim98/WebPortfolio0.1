import styled from 'styled-components'

const LargeText = styled.h2`
  color: ${props => props.color || 'white'};
  font-size: 1.2rem;
`

export default LargeText