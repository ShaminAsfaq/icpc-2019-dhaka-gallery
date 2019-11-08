import React, { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { SetList } from './actions/StoreActions';
import configureStore from './store/ConfigureStore';
import {Provider} from 'react-redux';
import { IndexPlaceholder } from './components/placeholders/IndexPlaceholder';

const App = lazy(() => import('./components/App'));

const foundStore = configureStore();

// var unsubscribe = foundStore.subscribe(() => {
//     console.log(foundStore.getState())
// });

var getData = async () => {
     var response = await axios.get('https://icpc-2019-dhaka-gallery-node.herokuapp.com/')
    //  var response = await axios.get('http://localhost:3001')
    foundStore.dispatch(SetList(response.data));
}

getData();

const jsx = (
    <Provider store = {foundStore}>
        <Suspense fallback={<IndexPlaceholder />}>
            <App />
        </Suspense>
    </Provider>
);

ReactDOM.render(jsx, document.querySelector('#root'));


