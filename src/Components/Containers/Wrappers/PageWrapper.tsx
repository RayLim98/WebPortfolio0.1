import styled from 'styled-components'
import { midground_z } from '../zIndex'

interface PageWrapperProps {
    column: boolean
    backgroundColor: string
    height: number
}

/**
 * @description Wrapper for a paginating page
 */
const PageWrapper = styled.section<PageWrapperProps>`
    display: flex;
    flex: 1;
    height: 20vh;
    width: 100%;
    min-height: ${props => props.height || 100}vh;
    padding-left: 10vw;
    padding-right: 10vw;
    padding-bottom: 10vh;
    padding-top: 8vh;
    transition: background-color 1s ease-in;

    flex-direction: column;
    // add changes when browswer is 768 or less
	/* @media screen and (max-width: 768px) {
	} */
`

export default PageWrapper
