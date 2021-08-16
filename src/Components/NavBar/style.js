import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
// Positioning, Sizing, Color
export const Nav = styled.nav`
	color: #fff;
	background: #41729F;
	height: 100px;
	/* margin-top: -80px; */
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

// Container, Layout for items etc
export const NavBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: inherit;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`;

export const NavMenu = styled.ul`
	text-decoration: none;
	list-style: none;
	display: flex;
	align-items: center;
	margin-right: -22px;
	
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const Logo = styled(LinkR)`
	color: inherit;
	justify-self: flex-start;
	display: flex;
	font-size: 1.3rem;
	align-items: center;
	margin-left: 24px;
	text-decoration: none;
	font-weight: bold;
	transition: 0.1s ease-in-out;
	cursor: pointer;
`;

export const NavLinkR = styled(LinkR)`
	text-decoration: none;
	padding: 24px;
	color: inherit;
	font-size: 0.9rem;
`;

export const NavLinkS = styled(LinkS)`
	display: flex;
	align-items: center;
	font-weight: bold;
	color: inherit;
	text-decoration: none;
	padding: 24px;
	font-size: 0.9rem;
	height: 100%;

	&.active{
		border-bottom: 3px solid #01bf71;
	}
`;

export const Icon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: flex;
		align-items: center;
		cursor: pointer;
		height: 100%;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkR)`
	transition: all 0.2s ease-in-out;
	color: inherit;
	border-radius: 50px;
	background: #01bf71;
	/* white-space: nowrap; */
	padding: 10px 22px;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		transition: all 1s ease-in-out;
		background: #fff;
		color: #010606;
	}
`;