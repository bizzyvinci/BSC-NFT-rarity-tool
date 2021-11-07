import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Grid from '../components/Grid.jsx';
import Description from '../components/Description.jsx'
import GridCtrlTop from '../components/GridCtrlTop.jsx';
import GridCtrlBottom from '../components/GridCtrlBottom.jsx';
import SideBar from '../components/SideBar.jsx';
import PopupInfo from '../components/PopupInfo';
import { Config } from '../utils';


const Overlay = styled.div`
	position: fixed;
	display: ${props => props.open ? 'block' : 'none'};
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0,0,0,0.5);
	z-index: 2; 
`;

const Div = styled.div`
	margin: 10px 5%;
`;


const Contract = () => {
	const { address } = useParams();
	const [sort, setSort] = useState('rarity');
	const [page, setPage] = useState(1);
	const [count, setCount] = useState(50);
	const [filter, setFilter] = useState('');
	const [ranking, setRanking]  = useState('rarity_rank');
	const [totalItems, setTotalItems] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [meta, setMeta] = useState({});
	const [tokens, setTokens] = useState([]);
	const [lookup, setLookup] = useState(null);
	const [lookupData, setLookupData] = useState({});
	const [openPopup, setOpenPopup] = useState(false);
	const [hideMain, setHideMain] = useState(true);
	const [openSidebar, setOpenSidebar] = useState(false);
	const [useOr, setUseOr] = useState(true)

	const updateSort = (new_sort) => {
		//console.log(new_sort)
		setSort(new_sort)
	}

	const toggleSelect = (trait, value) => {
		let temp = meta
		temp.attributes[trait + '_-_' + value.name].selected = !value.selected
		setMeta(temp)
	}

	const applyFilter = () => {
		const arr = Object.entries(meta.attributes).filter(([key, value]) => {
			if (value.selected) {
				return true
			}
			return null
		}).map(([key, value]) => {
			//const [t,v] = key.split('_-_')
			return key
		})
		//console.log('Applied filter')
		//console.log(arr)
		setPage(1)
		setFilter(arr.join(';'))
		setOpenSidebar(false)
	}

	const clearFilter = () => {
		let temp = meta
		Object.entries(temp.attributes).map(([key, value]) => {
			temp.attributes[key].selected = false;
			return null;
		})
		setMeta(temp);
		setFilter('');
	}

	const gotoPage = (new_page) => {
		if (new_page>=1 && new_page<=totalPages){
			setPage(new_page)
			console.log(page)
		}
	}

	const closePopup = () => {
		setOpenPopup(false);
		setLookup(null);
	}

	useEffect(() => {
		async function get_count() {
			let url = new URL(Config.api + address + '/count/')
			url.search = new URLSearchParams({filter: filter, 'use_or': useOr})
			let response = await fetch(url);
			let result = await response.json();
			//console.log(result);
			return result;
		}
		get_count().then(c => {
			setTotalItems(c);
			setTotalPages(Math.ceil(c/count))
		});
	}, [filter, useOr])

	useEffect(() => {
		async function get_tokens() {
			let url = new URL(Config.api + address + '/tokens/')
			url.search = new URLSearchParams({count:count, page:page, sort:sort, filter:filter, ranking:ranking, 'use_or': useOr});
			let response = await fetch(url);
			let result = await response.json();
			console.log(result);
			return result;
		}
		get_tokens().then(t => setTokens(t));
	}, [filter, count, page, sort, ranking, useOr])

	useEffect(() => {
		async function get_meta() {
			let url = new URL(Config.api + address + '/meta/');
			let response = await fetch(url);
			let result = await response.json();
			const attr = result.attributes;
			result.attributes = {};
			for (let i=0; i<attr.length; i++) {
				const _id = attr[i]['_id']
				result.attributes[`${_id.trait_type}_-_${_id.value}`] = {
					count: attr[i].count,
					percent: attr[i].percent,
					score: attr[i].score,
					selected: false
				}
			}
			//console.log(result)
			return result;
		}
		get_meta().then(m => setMeta(m));
	}, [])

	useEffect(() => {
		async function get_token(tokenId) {
			let url = new URL(Config.api + address + '/token/' + tokenId + '/');
			let response = await fetch(url);
			let result = await response.json();
			//console.log(result)
			for (let i=0; i<result.attributes.length; i++) {
				const x = result.attributes[i];
				result.attributes[i].count = meta.attributes[x.trait_type + '_-_' + x.value].count;
				result.attributes[i].score = meta.attributes[x.trait_type + '_-_' + x.value].score;
				result.attributes[i].percent = meta.attributes[x.trait_type + '_-_' + x.value].percent;
			}
			console.log(result);
			return result;
		}
		console.log(lookup);
		if (lookup) {
			get_token(lookup).then(r => setLookupData(r));
			setOpenPopup(true);
		}
	}, [lookup])
	
	return(
		<>
			<Div>
				<SideBar attributes={meta.attributes} meta={meta} show={openSidebar} setShow={setOpenSidebar} 
					toggleSelect={toggleSelect} applyFilter={applyFilter}
					clearFilter={clearFilter} useOr={useOr} setUseOr={setUseOr} />
				<PopupInfo data={lookupData} ranking={ranking} open={openPopup} closePopup={closePopup} />
				<Overlay open={openSidebar || openPopup} onClick={() => {setOpenPopup(false); setOpenSidebar(false)}} />
				<Description data={meta} />
				<GridCtrlTop setSort={updateSort} setRanking={setRanking} setLookup={setLookup} setShowSidebar={setOpenSidebar} totalItems={totalItems}/>
				<GridCtrlBottom currentPage={page} 
					totalPages={totalPages} 
					gotoPage={gotoPage} />
				<Grid data={tokens} setLookup={setLookup} ranking={ranking} />
				<GridCtrlBottom currentPage={page} 
					totalPages={totalPages} 
					gotoPage={gotoPage} />
			</Div>			
		</>
	)
}

export default Contract
