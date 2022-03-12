import styled from 'styled-components'

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.column? 'column': 'row'};
`

export default ContentWrapper