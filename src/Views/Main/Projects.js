import { useTheme } from '../../Context/ThemeContext'
import PageWrapper from '../../Components/Containers/Wrappers/PageWrapper';
import HeadingText from '../../Components/TextStyles/HeadingText';
import FlexConWrapper from '../../Components/Containers/Wrappers/FlexConWrapper';
import CarouselItem from '../../Components/Containers/Wrappers/CarouselItem';
import { useState } from 'react';

const projectList = [
	{
		id: 1,
		color: 'red',
		title: 'Login Page',
		description: 'hay',
	},
	{
		id: 2,
		color: 'green',
		title: 'Rocketry',
		description: 'howdy'
	},
	{
		id: 3,
		color: 'pink',
		title: 'idk',
		description: 'hi'
	},
]
const Projects = () => {
	const { theme } = useTheme();
	return ( 
		<PageWrapper id="project" backgroundColor={theme.primary}>
			<HeadingText>
				Projects
			</HeadingText>
			<FlexConWrapper bgColor='blue'>
				{
					projectList.map((item)=>
						<CarouselItem
							bgColor={item.color}
							title={item.title}
						/>
					)
				}
			</FlexConWrapper>
		</PageWrapper>
	 )
}

export default Projects