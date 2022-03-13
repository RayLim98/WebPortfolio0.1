import styled from 'styled-components'

interface FlexDivProps {
    flex: number
    flexDirection: string
    bgColor: string
    alignItems: string
    justifyContent: string
}

export const FlexDiv = styled.div<FlexDivProps>`
    display: flex;
    flex: ${props => props.flex? props.flex: 1};
    flex-wrap: wrap;
	@media screen and (max-width: 768px) {
        flex-direction: column;
	}
`
export const FlexCol = styled(FlexDiv)`
    flex-direction: column;
`

export const FlexRow = styled(FlexDiv)`
    flex-direction: row;
`