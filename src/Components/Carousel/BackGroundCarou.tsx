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

interface BgProps {
  backgroundColor: string
}

const Bg = styled.div<BgProps>`
  height: 100vh;
  min-height: 100vh;
  background-color: ${props=> props.backgroundColor || 'green'};
`
const Carousel = styled.div`
  position: fixed;
  display: flex;
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
  bottom: 20%;
  flex-direction: column-reverse;
  align-items: flex-end;
  flex: 1;
  min-width: 100%;
  height: 80vh;
  padding: 4vh;
  font-size: 8rem;
  opacity: 0.5;
`


const BackGroundCarou = ({children, bgColor}: {children: any, bgColor: any}) => {
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
    <Bg backgroundColor={theme.primary}>
      <Carousel>
        {
          titleNames.map((item, index) => 
            <CarouselItem style={{transform: `translateX(-${y}%)`, transition: 'transform ease-in'}} key={item}>
              {item}
            </CarouselItem>
          )
        }
      </Carousel>
      <section>
        {children}
      </section>
    </Bg>
  )
}

export default BackGroundCarou