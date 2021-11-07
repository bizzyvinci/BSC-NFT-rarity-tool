import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10px;

	div {
		display: inline-block;
		margin: 0 10px;
	}
	button {
		width: 3rem;
		margin: 0 2px;
		border-radius: 0.5rem;
		border: 1px solid;
	}
	input {
		border-radius: 1rem;
		border: 1px solid;
		padding: 0 5px;
	}
`;

const GridCtrlBottom = ({ gotoPage, totalPages, currentPage }) => {
	return (
		<>
			<Div>
				<div>
					<button onClick={() => gotoPage(1)} disabled={!(currentPage>1)}>
						{'<<'}
					</button>
					<button onClick={() => gotoPage(currentPage-1)} disabled={!(currentPage>1)}>
						{'<'}
					</button>
					<button onClick={() => gotoPage(currentPage+1)} disabled={!(currentPage<totalPages)}>
						{'>'}
					</button>
					<button onClick={() => gotoPage(totalPages)} disabled={!(currentPage<totalPages)}>
						{'>>'}
					</button>
				</div>
				<div>
					<span>Page </span>
					<input type="number" value={currentPage}
						onChange={e => gotoPage(e.target.value)}
					/>
					<span> of {totalPages}</span>
				</div>
			</Div>
		</>
	)
}

export default GridCtrlBottom
