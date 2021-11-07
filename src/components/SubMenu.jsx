import React from 'react';
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';


const Menu = styled.div`
	display: flex;
	font-weight: bold;
	font-size: 1.5rem;
	justify-content: space-between;
	padding: 5px;
	border-bottom: 1px solid grey;
	background-color: ${p => p.selected ? 'green' : 'white'};
	&:hover {
		cursor: pointer;
		background-color: #eee;
	}
	&:active {
		background-color: #ccc;
	}
`;

const ValRowDiv = styled.div`
	display: flex;
	margin: 3px 20px 5px 30px;
	padding: 2px;
	border-bottom: 0.5px dotted grey;
	justify-content: space-between;
	&.selected {
		background-color: green;
	}
	p {
		display: inline;
		margin: 0;
	}
	&:hover {
		cursor: pointer;
		background-color: #eee;
	}
	&:active {
		background-color: #ccc;
	}
`;

const ValRow = ({ value, traitType, toggleSelect }) => {
	//console.log(value.selected)
	return (
		<>
			<ValRowDiv className={value.selected ? 'selected' : ''}
				selected={value.selected} onClick={() => toggleSelect(traitType, value)}>
				<p>{value.name}</p>
				<p>{value.count}</p>
			</ValRowDiv>
		</>
	)
}


const SubMenu = ({ traitType, values, toggleSelect }) => {
	const [subnav, setSubnav] = useState(false);
	const showSubnav = () => setSubnav(!subnav);
	const isSelected = values.map(a => a.selected).some(Boolean)

	return (
		<>
			<Menu onClick={showSubnav} selected={isSelected}>
				<div className="title">
					{traitType}
				</div>
				<div className="arrow">
					{subnav ? <IoIosArrowDown /> : <IoIosArrowForward />}
				</div>
			</Menu>
			{subnav &&
				values.map((value, index) => {
					return (
						<ValRow value={value} traitType={traitType} key={index} toggleSelect={toggleSelect} />
					)
				})
			}
		</>
	)
}

export default SubMenu
