const OnSearch = (text = '') => {
    return {
        type: 'SEARCH',
        text: text
    }
}

const OnButtonClicked = (list = [], pageNumber = 0, value = 0) => {
    return {
        type: 'CLICK',
        list: list,
        pageNumber: pageNumber,
        value: value
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
    FilteredList,
    OnButtonClicked
}

