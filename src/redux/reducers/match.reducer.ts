import produce from "immer";
import { Actions, ActionTypes } from "../actions/match.actions";
import { IMatchState } from "../../model";

const matchReducer = (state = { ready: false }, action: Actions) =>
    produce(state, (draft: IMatchState | any) => {
        switch (action.type) {
            case ActionTypes.MATCH_START_INIT:
                draft.ready = false;
                break;
            case ActionTypes.MATCH_START_SUCCESS:
                draft.ready = true;
                draft.blue = action.payload.blue;
                draft.red = action.payload.red;
                break;
            case ActionTypes.MATCH_START_ERROR:
                break;
        }
    });

export default matchReducer;