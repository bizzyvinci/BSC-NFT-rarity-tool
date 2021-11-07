import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage.jsx'
import Contract from './pages/Contract.jsx';
import Stats from './pages/Stats.jsx';
import ListNFT from './pages/List.jsx';


const App = () => {
	return(
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Homepage />
					</Route>
					<Route exact path='/nft/:address' children={<Contract />} />
					<Route exact path='/stats'>
						<Stats />
					</Route>
					<Route exact path='/list-nft'>
						<ListNFT />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App;
