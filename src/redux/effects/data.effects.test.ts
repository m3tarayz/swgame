import expect from "expect";
import { call, put } from "redux-saga/effects";

import { getDataSaga, getData } from "./data.effects";
import { ActionTypes, Actions } from "../actions/data.actions";

describe("dataEffects", () => {
    it("should handle successful api call", () => {
        const generator = getDataSaga();

        const successAction: Actions | any = {
            type: ActionTypes.DATA_GET_SUCCESS,
            payload: undefined
        };

        expect(generator.next().value)
            .toEqual(call(getData));

        expect(generator.next().value)
            .toEqual(put(successAction));
    });

    it("should handle error", () => {
        const generator = getDataSaga();

        const failedAction: Actions = {
            type: ActionTypes.DATA_GET_ERROR,
            payload: "error"
        };

        expect(generator.next().value)
            .toEqual(call(getData));

        expect(generator.throw("error").value)
            .toEqual(put(failedAction));
    });
});