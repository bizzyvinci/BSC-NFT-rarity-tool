import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Config } from '../utils';


const Div = styled.div`
	margin: 10px 5%;
	h2 {
		font-size: 1.5rem;
		text-align: center;
	}
	div.sec {
	}
	div.card {
		text-align: center;
		width: 300px;
		height: auto;
		border: 1px solid;
		border-color: rgba(209, 213, 219, 1);
		margin: 6px;
		padding: 4px;
		padding-bottom: 50px;
		box-sizing: border-box;
		border-radius: 1rem;
		color: #9e465b;
		display: inline-block;
		:hover {
			border-color: rgb(158, 70, 91, .75);
		}
		
		img {
			width: 256px;
			height: 256px;
			border-radius: 0.5rem;
			background-color: rgb(158, 70, 91, .5);
		}

		a {
			color: black;
			text-decoration: none;
		}
	}
`;

const Card = ( {collection} ) => {
	return (
		<div key={collection._id} className='card'>
			<a href={'/nft/'+collection._id}> 
				<h3>{collection.name}</h3>
				<img src={collection.image} alt={collection.name} />
			</a>
		</div>
	)
}

const Home = () => {
	// Add image and date added
	const [contracts, setContracts] = useState([]);

	useEffect(() => {
		async function get_contracts() {
			let url = new URL(Config.api + 'contracts/')
			let response = await fetch(url);
			let result = await response.json();
			//console.log(result);
			return result;
		}
		get_contracts().then(c => setContracts(c));
	}, [])

	if (contracts.length < 1) {
		return (
			<h2>All Collections Loading</h2>
		)
	}
	return (
		<>
			<Div>
				<h2>All Collections</h2>
				<div className='pri'>
					<div className='sec'>
						{contracts.map(c => {
							return (
								<Card collection={c} key={c._id} />
							)
						})}
					</div>
				</div>
			</Div>
		</>
	)
}

export default Home
