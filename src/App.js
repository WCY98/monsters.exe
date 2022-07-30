// import {Component} from 'react'
import { useState , useEffect } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';


const App = () => {

  
  const [ searchField, setSearchField] = useState('');//[value ,setValue]
  const [ monsters, setMonsters] = useState([])
  // const [stringField, setStringField] = useState('');
  const [filteredMonsters, setFilterMonsters] = useState(monsters)

  // console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>response.json())
    .then((users) => setMonsters(users)
    );
  },[])
  //()callback Function,希望在函数组件内部发生的代码或效果
  //{}array of dependency包含不同的依赖项，根据依赖关系最有可能是状态值

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilterMonsters(newFilteredMonsters);
  },[ monsters,searchField])


  const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();    
        setSearchField(searchFieldString);
       }

  // const onStringChange = (event) => {
  //   setStringField(event.target.value)
  // }
  // const filteredMonsters = monsters.filter((monster) => {
  //       return monster.name.toLocaleLowerCase().includes(searchField);
  //     });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <h2 className="app-title2">Monsters Rolodex2</h2>
      <h3 className="app-title3">Monsters Rolodex3</h3>
      <h4 className="app-title4">Monsters Rolodex4</h4>

      <SearchBox 
      className='monsters-search-box'
      onChangeHandler= {onSearchChange}  
      placeholder={'search monsters'}
      />

{/* <SearchBox 
      // className='monsters-search-box'
      onChangeHandler= {onStringChange}  
      placeholder={'set string'}
      /> */}
      <CardList monsters= {filteredMonsters}/>
      
    </div>
  );
  }

// }
// class App extends Component{
//   constructor(){
//     super();

//     this.state = {
//       monsters:[],
//       searchField:''
//     }

//   }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) =>response.json())
  //   .then((users) => this.setState(
  //     () =>{
  //     return {monsters: users};
  //     }
  //   ))
  // }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
   

//     this.setState(() => {
//       return { searchField };
//     })
//    }

//   render() {

//     const {monsters, searchField} =this.state;
//     const { onSearchChange} =this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>

//         {/* {
//           filteredMonsters.map((monster) => {
//             return <div key={monster.id}>
//               <h1>{monster.name}</h1>
//               </div>;
//           })
//         } */}
//         <SearchBox 
//         className='monsters-search-box'
//         onChangeHandler= {onSearchChange}  
//         placeholder={'search monsters'}/>
//         <CardList monsters= {filteredMonsters}/>
        
//       </div>
//     );
//     }

//   }

export default App;
