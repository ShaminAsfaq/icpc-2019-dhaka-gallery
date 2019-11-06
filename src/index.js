import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import { OnSearch, SetList } from './actions/StoreActions';

import App from './components/App';
import configureStore from './store/ConfigureStore';
import {Provider} from 'react-redux';

const foundStore = configureStore();

// var unsubscribe = foundStore.subscribe(() => {
//     console.log(foundStore.getState())
// });

var getData = async () => {
    var response = await axios.get('http://118.179.95.206:3001')
    foundStore.dispatch(SetList(response.data));
}

getData();


const jsx = (
    <Provider store = {foundStore}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.querySelector('#root'));


