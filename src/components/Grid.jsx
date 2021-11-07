import React from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';


const Div = styled.div`
	margin: 0 50px;
	align-items: center;
`;

const Grid = ( { data, setLookup, ranking } ) => {
	return(
		<>
			<Div>
				{
					data.map((item) => {
						return(
							<Card rank={item[ranking]} id={item.token_id}
								image={item.image} key={item.token_id}
								onClick={setLookup}
							></Card>
						)
					})
				}
			</Div>
		</>
	)
}

export default Grid
