import React from 'react';
import SearchBar from '../components/SearchBar';
import ImageList from './ImageList';
import { connect } from 'react-redux'


class App extends React.Component {

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar />
                {
                    this.props.teamList.list &&
                    <ImageList list = {this.props.teamList.list}/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        teamList: state.teamList
    }
}

const ConnectedApp = connect(mapStateToProps)(App);

export {
    ConnectedApp as default
}

