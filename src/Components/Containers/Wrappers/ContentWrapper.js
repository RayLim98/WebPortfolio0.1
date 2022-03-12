import styled from 'styled-components'

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.col || 'row'};
`

export default ContentWrapper