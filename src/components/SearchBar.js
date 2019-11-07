import React from 'react';
import { connect } from 'react-redux';
import { OnSearch, FilteredList, OnButtonClicked } from '../actions/StoreActions';

class SearchBar extends React.Component {
    render() {
        return (

            <div className="ui top fixed menu">
                <div className="ui buttons" style={{width: '55%', margin: '0 auto', textAlign: 'center', marginBottom: '0.5%' }}>
                    <form 
                        className="ui form" style={{width: '100%', margin: '0 auto', textAlign: 'center', marginBottom: '0.5%'}}
                        onSubmit={(e)=> {
                            e.preventDefault()
                        }}
                    >
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
                    </form>
                    <div className="ui buttons" style={{ marginLeft: '15%' }}>
                        <button 
                            className="ui labeled button" style={{ marginRight: '5%' }}
                            onClick={() => {
                                this.props.dispatch(OnButtonClicked(this.props.teamList.filteredList, this.props.teamList.pageNumber, -1));
                            }}
                        >
                            <i className="left chevron icon"></i>
                            Previous
                        </button>
                        
                        <button 
                            className="ui right labeled button" style={{ marginLeft: '5%' }}
                            onClick={() => {
                                this.props.dispatch(OnButtonClicked(this.props.teamList.filteredList, this.props.teamList.pageNumber, 1));
                            }}
                        >
                            Next
                            <i className="right chevron icon"></i>
                        </button>
                    </div>
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
