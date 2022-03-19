import React from 'react'
import PageText from '../TextStyles/PageText'

const titleNames = [
    "Home",
    "About",
    "Project",
    "Contact",
]

const PageCarousel = () => {
  return (
    <div>
        {
            titleNames.map((item) => 
                <PageText>{item}</PageText>
            )
        }
    </div>
  )
}

export default PageCarousel