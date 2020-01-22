import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddlware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "../redux/reducers";
import { watcherSaga } from "./sagas";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddlware();

const getAppliedMiddleware = (history: any) => {
    if (process.env.NODE_ENV === "development") {
        return applyMiddleware(
            sagaMiddleware,
            routerMiddleware(history)
        );
    }
    return applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
    )
}

const configureStore = (preloadedState?: any) => {
    const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(
            getAppliedMiddleware(history),
        )
    );
    sagaMiddleware.run(watcherSaga);

    return store;
}

export default configureStore;