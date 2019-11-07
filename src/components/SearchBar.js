import React from 'react';
import { connect } from 'react-redux';
import { OnSearch, FilteredList } from '../actions/StoreActions';

class SearchBar extends React.Component {
    render() {
        return (

            <div className="ui top fixed menu">
                <div style={{width: '50%', margin: '0 auto', textAlign: 'center', marginBottom: '0.5%'}}>
                    <form className="ui form">
                            <input 
                                placeholder='Search by Team Name, Institute Name or Name of Yourself!'
                                style={{ marginTop: '0.5%' }}
                                type="text"
                                autoFocus={true}
                                value={this.props.searchKey.key || ''}
                                onChange={(e) => {
                                    this.props.dispatch(OnSearch(e.target.value));
                                    this.props.dispatch(FilteredList(this.props.teamList, e.target.value));
                            }}/>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        teamList: state.teamList,
        searchKey: state.searchKey
    }
}

const ConnectedSearchBar = connect(mapStateToProps)(SearchBar);

export {
    ConnectedSearchBar as default
}

