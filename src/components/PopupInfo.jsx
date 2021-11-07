import React from 'react';
import styled from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';

const Div = styled.div`
	background-color: white;
	position: fixed;
	top: 10%;
	bottom: 10%;
	left: 50%;
	right: 50%;
	margin-left: -30%;
	margin-right: -30%;
	padding: 20px 50px;
	overflow: scroll;
	align-items: center;
	z-index: 3;
	.container {
		align-items: center;
		text-align: center;
		&.button {
			position: fixed;
			bottom: 90%;
			right: 20%;
		}
	}
	button#close {
		border: none;
		padding: 10px;
		border-radius: 1rem;
		font-size: 1.5rem;
		color: red;
		background-color: white;
		&:hover {
			background-color: red;
			color: white
		}
	}
	h3 {
		text-align: center;
		background-color: #9E465B;
		padding: 5px;
		border-radius: 1rem;
		color: white;
	}
`;

const ImgDiv = styled.div`
	border: 2px solid rgba(209, 213, 219);
	border-radius: 1rem;
	width: 244px;
	padding: 1rem;
	p {
		font-weight: bold;
		margin: 10px 0;
		&.title {
			font-size: 1.25rem;
		}
	}

	img {
		width: 244px;
		height: 244px;
		background-color: red;
		border-radius: 0.5rem;
	}
`;

const RarityDiv = styled.div`
	#rarity-score {
		font-size: 1.125rem;
		background-color: #9E465B;
		padding-bottom: 10px;
		color: white;
		border-radius: 1rem;
		text-align: center;
		p {
			margin: 0;
			&:first-child {
				margin-top: 5px;
			}
			&:last-child {
				font-weight: bold;
				background-color: white;
				color: #9E465B;
			}
		}
	}
`;

const Attributes = styled.div`
	div {
		&.attr-row {
			margin: 1rem 0;
		}

		&.name-score, &.value-count {
			display: flex;
			justify-content: space-between;
			padding: 0 5px;
			align-items: center;
			p {
				margin: 0;
			}
		}

		&.name-score {
			p {
				&:last-child {
					font-weight: bold;
					font-size: 1.25rem;
					color: green;
				}
			}
		}

		&.value-count {
			background-color: grey;
			color: white;
			padding: 2px 5px;
			border-radius: 1rem;
		}
	}
`;

const PopupInfo = ({ data, ranking, open, closePopup }) => {
	if (Object.keys(data).length < 1 || !open) {
		return null
	}

	return (
		<>
			<Div>
				<div className='container button'>
					<button onClick={() => {closePopup(false)}} id='close'>{<IoIosCloseCircle />}</button>
				</div>
				<div>
					<h3>{'Name: ' + data.name}</h3>
				</div>
				<div className='container'>
					<ImgDiv>
						<p className='title'>Rarity Rank #{data[ranking]}</p>
						<div className='img'>
							<img src={data.image} alt={data.token_id} />
						</div>
						<p className='id'>ID: {data.token_id}</p>
					</ImgDiv>
				</div>
				<div className='container'>
					<RarityDiv>
						<div id='rarity-score'>
							<p>Rarity score</p>
							<p>{data[ranking.slice(0,-4) + 'score']}</p>
						</div>
						<Attributes>
							<h4>Attributes</h4>
							{data.attributes.map(a => {
								return (
									<div className='attr-row' key={a.trait_type}>
										<div className='name-score'>
											<p>{a.trait_type}</p>
											<p>
												{ranking==='rarity_rank'
												? '+' + a.score 
												: a.percent + '%'}
											</p>
									
										</div>
										<div className='value-count'>
											<p>{a.value}</p>
											<p>{a.count}</p>
										</div>
									</div>
								)
							})}
						</Attributes>
					</RarityDiv>
				</div>
			</Div>
		</>
	)
}


export default PopupInfo;
