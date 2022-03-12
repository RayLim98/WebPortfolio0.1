import styled from 'styled-components'

const LargeText = styled.h2`
  color: ${props => props.color || 'white'};
  font-size: 1.5rem;
`

export default LargeText