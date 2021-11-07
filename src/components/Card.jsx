import React from 'react';
import styled from 'styled-components';


const ImgDiv = styled.div`
	height: 154px;
	width: 154px;
	img {
		height: 150px;
		width: 150px;
		margin: 2px;
		background-color: rgb(158, 70, 91, .5);
		border-radius: .5rem;
	}
`

const Div = styled.div`
	height: 238px;
	width: 166px;
	border: 1px solid;
	border-color: rgba(209, 213, 219, 1);
	margin: 6px;
	padding: 4px;
	box-sizing: border-box;
	border-radius: 1rem;
	color: #9e465b;
	display: inline-block;
	:hover {
		border-color: rgb(158, 70, 91, .75);
		cursor: pointer;
	}
	
	p {
		margin: 0.25rem;
		font-weight: bold;
	}

	p.rank {
		font-size: 1.25rem;
	}
`;

const Card = ({ rank, id, image, onClick }) => {
	if (!rank) {rank=''}
	return(
		<>
			<Div onClick={() => onClick(id)}>
				<p className='rank'>{"#"+rank}</p>
				<ImgDiv><img src={image} alt={rank} /></ImgDiv>
				<p className='id'>{"ID: "+id}</p>
			</Div>
		</>
	)
}

export default Card
