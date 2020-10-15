import React, {Component} from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; 
import './App.css'; 
import ReactDOM from 'react-dom';



class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			serachfield: ''
		}
	}

	componentDidMount() {
		document.title = "RoboFriends"
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => { 
		this.setState({serachfield: event.target.value})
	}

	render() {
		const { robots, serachfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(serachfield.toLowerCase()); 
		}) 
		return !robots.length ?  
			<h1 className='f1 tc'>Loading</h1> :
			(
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox  searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>
		</div>
	);
}
}

export default App; 