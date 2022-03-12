import styled from 'styled-components'

const HeadingText = styled.h1`
  justify-content: center;
  color: ${props => props.color || 'white'};
  font-size: 3rem;
`

export default HeadingText