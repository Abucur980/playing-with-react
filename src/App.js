import './App.css';
// import {Component} from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';

// class App extends Component {
  // we call the class constructor only to initialize the state
//   constructor() {
//     super();

//     this.state = {
//       people: [],
//       searchVal: ''
//     }
//   }

//   // get the data from the api, convert it into object(json) and then update the state with the fetched data
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
        // because the state obj was changed, the component will re-render.
//     .then((returnedPeople) => this.setState({ people: returnedPeople }));
//   }

//   // return whatever is inside the input
//   onSearchChange = (event) => {
  // re-render again
//     this.setState(() => {
//       return {searchVal : event.target.value.toLocaleLowerCase()}
//     })
//   }

//   render() {
//     // people that contain what is in searchVal state
//     let filteredPeople = this.state.people.filter((person) => person.name.toLocaleLowerCase().includes(this.state.searchVal));

//     return (
//       <div className="App">
//         <SearchBar onChangeHandler={this.onSearchChange} placeholder="search people"/>
//         <CardList people={filteredPeople}/>
//       </div>
//     );
//   }
// }

const App = () => {
  console.log("render");
  // array destructuring
  const [searchVal, setSearchVal] = useState(''); //[value(value that we want to store), setValue(set function)]
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState(people);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((rawData) => rawData.json())
    .then((jsonData) => setPeople(jsonData));
  }, []);

  useEffect(() => {
    const updatedFilteredPeople = people.filter((person) => person.name.toLocaleLowerCase().includes(searchVal));
    setFilteredPeople(updatedFilteredPeople);
  }, [people, searchVal])

  const onSearchChange = (event) => {
    setSearchVal(event.target.value.toLocaleLowerCase())
  }

  return (
    <div className="App">
      <SearchBar onChangeHandler={onSearchChange} placeholder="search people"/>
      <CardList people={filteredPeople}/>
    </div>
  )
}

export default App;
