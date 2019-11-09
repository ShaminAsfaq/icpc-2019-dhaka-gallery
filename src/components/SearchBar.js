import React from 'react';
import { connect } from 'react-redux';
import { OnSearch, FilteredList, OnButtonClicked } from '../actions/StoreActions';

class SearchBar extends React.Component {
    render() {
        return(
            <div className="ui top fixed secondary menu top-menu">
                <div className="item search-box">
                    <div className="ui icon input">
                        <input 
                            placeholder='Search by Team Name, Institute Name or Member Name!'
                            style={{ marginTop: '0.5%' }}
                            type="text"
                            autoFocus={true}
                            value={this.props.searchKey.key || ''}
                            onChange={(e) => {
                                    this.props.dispatch(OnSearch(e.target.value));
                                    this.props.dispatch(FilteredList(this.props.teamList, e.target.value));
                                }
                            }
                        />
                        <i className="search link icon" ></i>
                    </div>
                </div>
                <div className="item">
                    <button 
                        className="ui labeled button topButton" style={{ marginRight: '5%' }}
                        onClick={() => {
                            this.props.dispatch(OnButtonClicked(this.props.teamList.filteredList, this.props.teamList.pageNumber, -1));
                        }}
                    >
                        <i className="left chevron icon"></i>
                        Previous
                    </button>
                    <button 
                        className="ui right labeled button topButton" style={{ marginLeft: '5%' }}
                        onClick={() => {
                            this.props.dispatch(OnButtonClicked(this.props.teamList.filteredList, this.props.teamList.pageNumber, 1));
                        }}
                    >
                        Next
                        <i className="right chevron icon"></i>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        teamList: state.teamList,
        searchKey: state.searchKey
    }
}

const ConnectedSearchBar = connect(mapStateToProps)(SearchBar);

export {
    ConnectedSearchBar as default
}
