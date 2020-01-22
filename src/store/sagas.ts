import { all, takeLatest } from "redux-saga/effects";
import { ActionTypes as dataActionTypes } from "../redux/actions/data.actions";
import { ActionTypes as matchActionTypes } from "../redux/actions/match.actions";
import * as dataEffects from "../redux/effects/data.effects";
import * as matchEffects from "../redux/effects/match.effects";

export function* watcherSaga() {
    yield all([
        takeLatest(dataActionTypes.DATA_GET_INIT, dataEffects.getDataSaga),
        takeLatest(matchActionTypes.MATCH_START_INIT, matchEffects.startMatchSaga)
    ])
}