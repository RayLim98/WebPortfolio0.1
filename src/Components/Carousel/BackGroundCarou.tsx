import React, { useEffect, useState } from 'react'
import PageText from '../TextStyles/PageText'
import styled from 'styled-components'
import { FaWindows } from 'react-icons/fa'
import { useTheme } from '../../Context/ThemeContext'

const titleNames = [
    "Home",
    "About",
    "Project",
    "Contact",
]

interface ChildrenProps {
  backgroundColor: string
}

const Bg = styled.div`
  height: 100vh;
  min-height: 100vh;
`
const Carousel = styled.div`
  display: flex;
  flex: 1;
  position: fixed;
  align-items: center;
  width: 100%; 
  height: 100vh;
  padding: 0;
  margin: 0;
`
const CarouselItem = styled.li`
  display: flex;
  color: white;
  position: relative;
  flex-direction: column-reverse;
  align-items: flex-end;
  flex: 1;
  bottom: 20%;
  min-width: 100%;
  height: 80vh;
  padding: 4vh;
  font-size: 8rem;
  opacity: 0.5;
`

const ChildrenContainer = styled.section<ChildrenProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${props=>props.backgroundColor || 'green'};
`

const BackGroundCarou = ({children, bgColor}: {children: any, bgColor: any}) => {
  /**
   * @description Paginating background for aesthetic purposes
   */
  const { theme } = useTheme()
  const [y, setY] = useState(0);
  const handleScroll = () => setY(interpolateScroll());
  const handleResize = () => setY(interpolateScroll());
  
  useEffect(()=> {
    window.addEventListener('resize', handleResize, false);
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
      window.removeEventListener('resize', handleResize, false);
    }
  },[])

  const interpolateScroll = () =>  (window.scrollY/window.innerHeight) * 100;

  return (
    <Bg>
      <Carousel>
          {
            titleNames.map((item, index) => 
              <CarouselItem style={{transform: `translateX(-${y}%)`, transition: 'transform ease-in'}} key={item}>
                {item}
              </CarouselItem>
            )
          }
      </Carousel>
      <ChildrenContainer backgroundColor={theme.primary}>
        {children}
      </ChildrenContainer>
    </Bg>
  )
}

export default BackGroundCarou