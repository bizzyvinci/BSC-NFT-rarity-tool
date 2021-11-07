import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import SubMenu from './SubMenu.jsx';

const SideBarNav = styled.div`
	width: 300px;
	background-color: white;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	overflow: scroll;
	min-width: 50%;
	padding: 10px;
	z-index: 3;

	#top, #bottom {
		display: flex;
		justify-content: space-between;
		button {
			margin: 5px 5px 10px;
			border-radius: 1rem;
			padding: 10px;
			width: 200px;
			border: 1px solid grey;
			background-color: #9E465B;
			color: white;
			font-size: 1.5rem;
			&:hover {
				opacity: .75;
				cursor: pointer;
			}
			&:active {
				opacity: 1;
			}
		}
	}

`;


const SideBar = ({ attributes, meta, show, setShow, toggleSelect, applyFilter, clearFilter, useOr, setUseOr }) => {
	if (!attributes || !show) {
		return null
	}

	let data = {}
	Object.entries(meta.attributes).map(([key, scores], index) => {
		const [trait, value] = key.split('_-_');
		scores.name = value;
		//scores.selected = false;
		//data.push({trait_type: trait, values})
		if (!data[trait]) {
			data[trait] = [];
		}
		data[trait].push(scores);
		return null;
	})
	//console.log(data)

	
	return (
		<>
			<SideBarNav>
				<div id="top">
					<button onClick={() => setUseOr(!useOr)}>{useOr ? 'Use Intercept' : 'Use Union'}</button>
					<button onClick={() => setShow(false)}>Close</button>
				</div>
				{Object.entries(data).map(([trait, values], index) => {
					values.sort((a,b) => {return a.count-b.count})
					return <SubMenu traitType={trait} values={values} key={index} toggleSelect={toggleSelect} />
				})}
				<div id="bottom">
					<button onClick={() => clearFilter()}>Clear filters</button>
					<button onClick={() => applyFilter()}>Apply filters</button>
				</div>
			</SideBarNav>
		</>
	)
}

export default SideBar
