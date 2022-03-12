import styled from 'styled-components'

const PageWrapper = styled.section`
    background-color: ${props => props.backgroundColor || 'green'};
    height: 20vh;
    width: 100%;
    min-height: ${props => props.height || 100}vh;
    padding: 4vh;
    padding-top: 8vh;

`

export default PageWrapper