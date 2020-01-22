import expect from "expect";

import reducer from "./data.reducer";
import { Actions, ActionTypes } from "../actions/data.actions";

describe("dataReducer", () => {
    it("should handle DATA_GET_INIT", () => {
        const initAction: Actions = {
            type: ActionTypes.DATA_GET_INIT
        };
        expect(reducer({ loading: true }, initAction)).toEqual({ loading: true });
    });

    it("should handle DATA_GET_SUCCESS", () => {
        const successAction: Actions = {
            type: ActionTypes.DATA_GET_SUCCESS,
            payload: {
                starships: [],
                people: [],
                loading: false
            }
        };
        expect(reducer({ loading: true }, successAction)).toEqual({
            loading: false,
            people: [],
            starships: []
        });
    });

    it("should handle DATA_GET_ERROR", () => {
        const errorAction: Actions = {
            type: ActionTypes.DATA_GET_ERROR,
            payload: {
                error: ""
            }
        };
        expect(reducer({ loading: true }, errorAction)).toEqual({
            loading: true,
        });
    });
});