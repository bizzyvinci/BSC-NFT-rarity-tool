import React from 'react';
import { NavLink as Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';


const Div = styled.div`
	width: 90%;
	margin: 0 5% 1rem;
	background-color: grey;
	border-radius: 3rem;
	text-align: center;
	
	div.link-container {
		width: 33.33%;
		border-radius: 2rem;
		display: inline-block;
		box-sizing: content-box;
		&.active{
			background-color: rgb(220, 189, 75);
		}
	}

	a {
		font-size: 2rem;
		text-decoration: none;
		color: white;
		padding: 5px 10px;
	}
`;


const Navbar = () => {
	const isStats = useRouteMatch(['/stats'])
	const isList = useRouteMatch(['/list-nft'])

	return (
		<>
			<Div>
				<div className="main-container">
					<div className={'link-container ' + (!isStats && !isList && 'active')} key='home'>
						<Link to='/'>Collections</Link>
					</div>
					<div className={'link-container ' + (isStats && 'active')} key='stats'>
						<Link to='/stats'>Stats</Link>
					</div>
					<div className={'link-container ' + (isList && 'active')} key='list'>
						<Link to='/list-nft'>List NFT</Link>
					</div>
				</div>
			</Div>
		</>
	)
}

export default Navbar;
