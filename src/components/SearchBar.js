import React from 'react';
import { connect } from 'react-redux';
import { OnSearch, FilteredList } from '../actions/StoreActions';

class SearchBar extends React.Component {
    render() {
        return (
            
            <div className="ui segment something">
                <form className="ui form">
                    <div className="field">
                        <label>Team Search</label>
                        <input type="text" autoFocus={true} value={this.props.searchKey.key || ''} onChange={(e) => {
                            this.props.dispatch(OnSearch(e.target.value));

                            this.props.dispatch(FilteredList(this.props.teamList, e.target.value));
                        }}/>
                    </div>
                </form>
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

