import styled from 'styled-components'
import { midground_z } from '../zIndex'

interface FlexDivProps {
    flex: number
    flexDirection: string
    bgColor: string
    alignItems: string
    justifyContent: string
}

const FlexConWrapper = styled.div<FlexDivProps>`
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    flex: ${props => props.flex? props.flex: 1};
    flex-direction: ${props => props.flexDirection || null};
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: ${props => props.bgColor || null};
    align-items: ${props => props.alignItems || null};
    justify-content: ${props => props.justifyContent || null};
	@media screen and (max-width: 768px) {
        flex-direction: column;
	}
`

export default FlexConWrapper
