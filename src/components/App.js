import React, { lazy, Suspense } from 'react';
import SearchBar from '../components/SearchBar';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { ImageListPlaceholder } from './placeholders/ImageListPlaceholder';
import './styles/App.css';

const ImageList = lazy(() => import('../components/ImageList'));

const initializeAnalytics = () => {
    ReactGA.initialize("UA-151912722-1");
    ReactGA.pageview('/HomePage')
}

class App extends React.Component {
    render() {
        initializeAnalytics()
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar />
                <div style={{ width: '75%', alignContent: 'center', marginLeft: '12.5%' }}>
                {
                    this.props.teamList.list &&
                    <Suspense fallback={<ImageListPlaceholder />}>
                            <ImageList list = {this.props.teamList.list}/>
                    </Suspense>
                }
                </div>
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

