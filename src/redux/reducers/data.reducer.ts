import produce from "immer";
import { Actions, ActionTypes } from "../actions/data.actions";
import { IDataState } from "../../model";

const dataReducer = (state = { loading: true }, action: Actions) =>
    produce(state, (draft: IDataState | any) => {
        switch (action.type) {
            case ActionTypes.DATA_GET_INIT:
                draft.loading = true;
                break;
            case ActionTypes.DATA_GET_SUCCESS:
                draft.loading = action.payload.loading;
                draft.starships = action.payload.starships;
                draft.people = action.payload.people;
                break;
            case ActionTypes.DATA_GET_ERROR:
                break;
        }
    });

export default dataReducer;