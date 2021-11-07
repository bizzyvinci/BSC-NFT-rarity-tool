import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
	display: block;
	margin: 0 10%;
	div.row {
		margin: 10px 20px;
		display: flex;
		justify-content: space-between;
	}
	label {
		margin-right: 10px;
		font-weight: bold;

	}
	div.filter {
		text-align: center;
	}
	button#filter {
		width: 50%;
		padding: 10px 0;
		border-radius: 3rem;
		justify-self: center;
		text-align: center;
		border-width: 1px;
		background-color: rgb(158, 70, 91);
		font-weight: bold;
		font-size: 1.25rem;
		color: white;
		&:hover {
			opacity: .75;
			cursor: pointer;
		}
		&:active {
			opacity: 1;
		}
	}

	input, select {
		border-radius: 1rem;
		border: 1px solid;
		padding: 0 5px;
	}

	select {
		background-color: white;
		&:hover {
			background-color: #eee;
			cursor: pointer;
		}
	}
	.total-items:hover {
		font-weight: bold;
		cursor: alias;
	}
`;

const GridCtrlTop = ({ totalItems, setRanking, setSort, setLookup, setShowSidebar }) => {
	return (
		<>
			<Div>
				<div className='filter'>
					<button id='filter' onClick={() => setShowSidebar(true)}>Filter traits</button>
				</div>
				<div className='row'>
					<div>
						<label htmlFor="rarity">Rarity type </label>
						<select name="rarity" id="rarity" onChange={e => setRanking(e.target.value)}>
							<option value="rarity_rank">Main Rarity</option>
							<option value="average_rarity_rank">Average Rarity</option>
							<option value="top_rarity_rank">Top Rarity</option>
							<option value="statistical_rarity_rank">Statistical Rarity</option>
						</select>
					</div>
					<div>
						<label htmlFor="sort">Sort by </label>
						<select name="sort" id="sort" onChange={e => setSort(e.target.value)}>
							<option value="rarity">Rarity</option>
							<option value="id">ID</option>
						</select>
					</div>
				</div>
				<div className='row'>
					<div className='total-items'>
						<span>{totalItems}</span> results
					</div>
					<div>
						<label>ID</label>
						<input 
							type="number" 
							onKeyPress={e => {
								if (e.key==='Enter') {
									setLookup(e.target.value)
								}
							}} />
					</div>
				</div>
			</Div>
		</>
	)
}

export default GridCtrlTop
