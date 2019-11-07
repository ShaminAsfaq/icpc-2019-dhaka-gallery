import { createStore, combineReducers } from 'redux';

const teamListReducer = (state = {}, action) => {
    switch(action.type){
        case 'CLICK':
            var value = action.value
            var list = action.list

            var pageNumber = action.pageNumber + value

            var lastPage = Math.floor(list.length/10)
            if(pageNumber<0) pageNumber = lastPage
            if(pageNumber>lastPage) pageNumber = 0
            var offset = pageNumber * 10

            list = list.slice(offset, offset+10)

            if(list.length==0){
                list = action.list
                pageNumber-=1;
            }

            return {
                ...state,
                list,
                pageNumber
            }
        case 'SET_LIST':
            return {
                ...state,
                list: action.list.slice(0, 10),
                mainList: action.list,
                filteredList: action.list,
                pageNumber: 0
            }
        case 'FILTER_LIST': {
            let pageNumber = 0

            let offset = (pageNumber)*10;
            let filteredList = action.list.mainList.filter((team) => {
                var result =    team.institute.toLowerCase().includes(action.key.toLowerCase())     ||
                                team.team_name.toLowerCase().includes(action.key.toLowerCase())     ||
                                team.coach_name.toLowerCase().includes(action.key.toLowerCase())    ||
                                team.c1_name.toLowerCase().includes(action.key.toLowerCase())       ||
                                team.c2_name.toLowerCase().includes(action.key.toLowerCase())       ||
                                team.c3_name.toLowerCase().includes(action.key.toLowerCase())       
                            ;
                return result;
            })
            filteredList = filteredList.sort((a,b) => {
                return a.institute > b.institute ? 1 : -1
            });

            let rawFilteredList = filteredList;
            rawFilteredList = rawFilteredList.sort((a,b) => {
                return a.institute > b.institute ? 1 : -1
            });

            if(!action.key){
                filteredList = action.list.mainList.slice(0, 10)
            }else {
                filteredList = filteredList.slice(offset, offset+10)
            }

            return {
                ...state,
                list: filteredList,
                filteredList: rawFilteredList,
                pageNumber: 0
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
            searchKey: searchReducer,
        })
    );
    return store;
}

export {
    buildStore as default
}

