//redux
import { createStore, applyMiddleware, combineReducers } from 'redux';

//redux-request
import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios';

import reducers from './reducers';
import { axiosInstance } from '../config/axios'

const { requestsReducer, requestsMiddleware } = handleRequests({
    driver: createDriver(axiosInstance),
});

const middleware = [...requestsMiddleware];

const bindMiddleware = (middleware) => {
    if(__DEV__) {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    } else {
        return applyMiddleware(...middleware);
    }
};

//recucers
const rootReducer = combineReducers({
    ...reducers,
    requests: requestsReducer,
});

export default createStore(rootReducer, bindMiddleware(middleware));