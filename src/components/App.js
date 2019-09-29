import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component{
    state = { images: [] };
    onSearchSubmit = async(term) =>{
        
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{ query: term},
            headers:{
                Authorization: 'Client-ID fab71d3c7dc29ca02b78a412bc9a104963b7c6d1c94ade49809a385a1f618c4c'
             }   

        });
        this.setState({images:response.data.results});
        console.log(response.data.results);
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found:{this.state.images.length} images
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