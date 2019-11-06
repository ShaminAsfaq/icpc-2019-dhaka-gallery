const OnSearch = (text = '') => {
    return {
        type: 'SEARCH',
        text: text
    }
}

const SetList = (list = []) => {
    return {
        type: 'SET_LIST',
        list: list
    }
}

const FilteredList = (list = [], key = '') => {
    return {
        type: 'FILTER_LIST',
        list: list,
        key: key
    }
}

export {
    OnSearch,
    SetList,
    FilteredList
}

