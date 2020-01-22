import expect from "expect";

import reducer from "./match.reducer";
import { Actions, ActionTypes } from "../actions/match.actions";
import { IMatchState } from "../../model";

describe("matchReducer", () => {
    it("should handle MATCH_START_INIT", () => {
        const initAction: Actions = {
            type: ActionTypes.MATCH_START_INIT
        };
        expect(reducer({ ready: false }, initAction)).toEqual({ ready: false });
    });

    it("should handle MATCH_START_SUCCESS", () => {
        const mockMatchState: IMatchState = {
            red: { data: { name: "", crew: "" }, strength: "", isWinner: false },
            blue: { data: { name: "", crew: "" }, strength: "", isWinner: false }
        }
        const successAction: Actions = {
            type: ActionTypes.MATCH_START_SUCCESS,
            payload: mockMatchState
        };

        expect(reducer({ ready: true }, successAction)).toEqual({
            red: successAction.payload.red,
            blue: successAction.payload.blue,
            ready: true
        });
    });

    it("should handle MATCH_START_ERROR", () => {
        const errorAction: Actions = {
            type: ActionTypes.MATCH_START_ERROR,
            payload: {
                error: ""
            }
        };
        expect(reducer({ ready: false }, errorAction)).toEqual({
            ready: false
        });
    });
});