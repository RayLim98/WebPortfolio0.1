import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const SideBarContainer = styled.div`
	background-color: #274472;
	position: fixed;
	opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
	top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
	transition: 0.3s ease-in-out;
	height: 100%;
	width: 100%;
	z-index: 999;
	color: white;
`
export const SideBarWrapper = styled.div`

`;

export const SideBarItems = styled.li`
	list-style: none;
	font-weight: bold;
	width: 40%;
`;

export const SideBarMenu = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	@media screen and (max-width: 480px) {

	}
`;

export const CloseIcon = styled.div`
	display: flex;
	cursor: pointer;
	flex-direction: row-reverse;
	padding: 24px;
`;

export const SideBarLink = styled(LinkS)`
	display: flex;
	text-decoration: none;
	padding: 24px 20%;
	cursor: pointer;
	text-decoration: none;
	transition: 0.1s ease-in-out;
	font-size: 1.5rem;
	text-align: center;

	&:hover {
		color: #B1D4E0;
	}
`;