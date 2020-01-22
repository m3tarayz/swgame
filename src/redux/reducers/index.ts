import { combineReducers, Reducer } from "redux";

import dataReducer from "./data.reducer";
import matchReducer from "./match.reducer";
import { IDataState, IMatchState, IResultState } from "../../model";
import { connectRouter } from "connected-react-router";
import resultReducer from "./results.reducer";

export interface IStoreState {
    data: IDataState,
    match: IMatchState,
    results: IResultState
}

const allReducers = {
    data: dataReducer,
    match: matchReducer,
    results: resultReducer
};

const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    ...allReducers
});

export default rootReducer;