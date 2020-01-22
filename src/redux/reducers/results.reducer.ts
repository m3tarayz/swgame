import produce from "immer";
import { Actions, ActionTypes } from "../actions/results.actions";
import { IResultState } from "../../model";

const resultReducer = (state = { results: [] }, action: Actions) =>
    produce(state, (draft: IResultState | any) => {
        switch (action.type) {
            case ActionTypes.RESULT_SAVE:
                draft.results.push({ ...action.payload });
                break;
        }
    });

export default resultReducer;