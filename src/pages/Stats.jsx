import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
	margin: 20px 2.5%;
	iframe {
		position: absolute;
		height: 80%;
		width: 95%;
	}
`;

const Stats = () => {
	return (
		<>
			<Div>
				<iframe src="https://dune.xyz/bizzyvinci/NFT-sales-and-volume" 
					title='stats' frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
			</Div>
		</>
	)
}

export default Stats
