import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	iframe {
		position: absolute;
		height: 80%;
		width: 95%;
	}
`;


const ListNFT = () => {
	return (
		<>
			<Div>
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf2_wKORwUErNAdj_f4zS1em4AgksXhWd8-uL8TykVSm70ekg/viewform?embedded=true" 
					title='form' height="1079" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
			</Div>
		</>
	)
}

export default ListNFT
