import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import discog from '../reducers/discog'
import { routerMiddleware, connectRouter } from 'connected-react-router'

export const history = createBrowserHistory()

// Middleware
const enhancers = []
const middleware = [thunk, logger, routerMiddleware(history)]
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const reducers = combineReducers({
	discog
})

const store = createStore(connectRouter(history)(reducers), {}, composedEnhancers)

export default store
