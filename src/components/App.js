import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component{

    onSearchSubmit(term){
        console.log(term);
        axios.get('https://api.unsplash.com/search/photos',{
            params:{ query: term},
            headers:{
                Authorization: 'Client-ID fab71d3c7dc29ca02b78a412bc9a104963b7c6d1c94ade49809a385a1f618c4c'
             }   

        }).then(x=>{
            console.log(x.data.results);
        })
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>);    
    }
}

// const App = () => {
//     return (
//         <div className="ui container" style={{ marginTop: '10px' }}>
//             <SearchBar />
//         </div>);
// };
export default App;