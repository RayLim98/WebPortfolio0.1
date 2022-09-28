import React, {useState} from 'react'
import styled from 'styled-components'
import LargeText from '../../TextStyles/LargeText'

interface CarouselWrapperInterface {
  bgColor: string
  flex: number
  onMouseEnter:  () => void
  onMouseLeave:  () => void
}

const CarouselWrapperStyle = styled.div<CarouselWrapperInterface>`
  background-color: ${props => props.bgColor || null};
  display: flex;
  flex: ${props => props.flex};
  transition: flex ease-in-out 0.5s;
`

const CarouselItem = ({
    title, 
    bgColor, 
  }: {
    title:string, 
    bgColor: string, 
  }) => {
  const [state, setState] = useState(false);

  const handleFlex = () => state? 30 : 1;
  const handleMouseEnter = () => setState(true) 
  const handleMouseLeave = () => setState(false)
  
  return (
    <CarouselWrapperStyle 
      flex={handleFlex()}
      bgColor={bgColor}
      onMouseEnter={()=> handleMouseEnter()}
      onMouseLeave={()=> handleMouseLeave()}
    >
      <LargeText secondary={false}>
        {title}
      </LargeText>
    </CarouselWrapperStyle>
  )
}

export default CarouselItem