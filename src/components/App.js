import React, { lazy, Suspense } from 'react';
import SearchBar from '../components/SearchBar';
// import ImageList from './ImageList';
import { connect } from 'react-redux';
import { ImageListPlaceholder } from './placeholders/ImageListPlaceholder';

// const LazyLoadComponentWrapper = lazy(() => import('./wrappers/LazyLoadComponentWrapper'));
const ImageList = lazy(() => import('../components/ImageList'));

class App extends React.Component {
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar />
                {
                    this.props.teamList.list &&
                    <Suspense fallback={<ImageListPlaceholder />}>
                            <ImageList list = {this.props.teamList.list}/>
                    </Suspense>
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

