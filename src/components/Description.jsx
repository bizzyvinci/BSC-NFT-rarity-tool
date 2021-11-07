import React from 'react';
import styled from 'styled-components';
import { RiTaskFill, RiGlobalFill, RiMediumFill, RiTwitterFill, RiDiscordFill, RiTelegramFill } from 'react-icons/ri';

const Div = styled.div`
	div.row {
		display: flex;
		justify-content: space-between;
		text-align: left;
	}
	p, ul, h2 {
		margin: 10px 5px;;
	}
`;

const Name = styled.h2`
`;

const Links = styled.ul`
	display: inline-block;
	list-style-type: none;
	font-size: 1.25rem;
	li {
		display: inline-block;
		margin: 1px 5px;
		padding: 2px;
	}
`;

const Desc = styled.p`
`;


const Description = ({ data }) => {
	if (Object.keys(data).length < 1) {
		return <p>Loading</p>;
	}

	const symbols = {
		'bscscan': <RiTaskFill color='#DCBD4B' />,
		'website': <RiGlobalFill color='grey' />,
		'twitter': <RiTwitterFill color='#1DA1F2' />,
		'discord': <RiDiscordFill color='#7289DA' />,
		'telegram': <RiTelegramFill color='0088cc' />,
		'medium': <RiMediumFill color='black' />,
	}

	return (
		<>
			<Div>
				<div key='name' className='row'>
					<Name>{data.name} ({data.symbol})</Name>
					<Links>
						<li key='bscscan'>
							<a href={'https://bscscan.com/token/'+data['_id']} target="_blank" rel="noopener noreferrer">{symbols.bscscan}</a>
						</li>
						{data.website && <li key='website'>
							<a href={data.website} target="_blank" rel="noopener noreferrer">{symbols.website}</a>
						</li>}
						{data.social && (
							Object.entries(data.social).map( ([key, value]) => {
								return (
									<li key={key}>
										<a href={value} target="_blank" rel="noopener noreferrer">{symbols[key]}</a>
									</li>
								)
							})
						)}
					</Links>
				</div>
				<div key='desc' className='row'>
					<Desc>{data.description}</Desc>
				</div>
			</Div>
		</>
	)
}


export default Description;
