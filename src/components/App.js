import React from 'react';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        list: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        var response = await axios.get('http://118.179.95.206:3001')
        this.setState({list: response.data})
    }

    render() {
        // console.log(this.state)
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar />

            <ImageList list={ this.state.list }/>
        </div>
        );
    }
}


export {
    App as default
}

