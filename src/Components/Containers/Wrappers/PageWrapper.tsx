import styled from 'styled-components'

interface PageWrapperProps {
    column: boolean
    backgroundColor: string
    height: number
}

const PageWrapper = styled.section<PageWrapperProps>`
    display: flex;
    background-color: ${props => props.backgroundColor || 'green'};
    height: 20vh;
    width: 100%;
    min-height: ${props => props.height || 100}vh;
    padding-left: 10vw;
    padding-right: 10vw;
    padding-bottom: 10vh;
    padding-top: 8vh;

    // add changes when browswer is 768 or less
	@media screen and (max-width: 768px) {
        flex-direction: column;
	}
`

export default PageWrapper