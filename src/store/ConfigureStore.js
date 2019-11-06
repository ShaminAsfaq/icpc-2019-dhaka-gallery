import { createStore, combineReducers } from 'redux';

const teamListReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_LIST':
            return {
                ...state,
                list: action.list,
                mainList: action.list
            }
        case 'FILTER_LIST': {
            let filteredList = action.list.mainList.filter((team) => {
                var result = team.institute.toLowerCase().includes(action.key.toLowerCase());
                return result;
            }).sort((a,b) => {
                return a.team_name > b.team_name ? 1 : -1
            });

            if(!action.key){
                filteredList = action.list.mainList
            }

            // console.log(filteredList)

            return {
                ...state,
                list: filteredList
            }
        }
        default:
            return state;
    }
}

const searchReducer = (state = [], action) => {
    switch(action.type) {
        case 'SEARCH':
            return {
                ...state,
                key: action.text || ''
            }
        default:
            return state;
    }
}

const buildStore = () => {
    const store = createStore(
        combineReducers({
            teamList: teamListReducer,
            searchKey: searchReducer
        })
    );
    return store;
}

export {
    buildStore as default
}

