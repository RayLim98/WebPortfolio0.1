import styled from 'styled-components'

interface FlexDivProps {
    flex: number
    flexDirection: string
    bgColor: string
    alignItems: string
    justifyContent: string
}

const HeadingDiv = styled.div<FlexDivProps>`
    display: flex;
    flex-wrap: wrap;
    flex: ${props => props.flex? props.flex: 1};
    flex-direction: ${props => props.flexDirection || null};
    background-color: ${props => props.bgColor || null};
    align-items: ${props => props.alignItems || null};
    justify-content: ${props => props.justifyContent || null};
`

export default HeadingDiv
