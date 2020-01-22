import expect from "expect";
import { select, put } from "redux-saga/effects";

import { startMatchSaga } from "./match.effects";
import { getData } from "../selectors/data.selector";
import { ActionTypes, Actions } from "../actions/match.actions";
import { IPerson, IStarship, IMatchState } from "../../model";

fdescribe("matchEffects", () => {
    it("should retrieve data from the store using selector and dispatch error action if there is an error", () => {
        const generator = startMatchSaga();

        expect(generator.next().value).toEqual(select((getData)));

        const failedAction: Actions = {
            type: ActionTypes.MATCH_START_ERROR,
            payload: "error"
        };

        expect(generator.throw("error").value)
            .toEqual(put(failedAction));
    });

    it("should retrieve data, create a matchup of people or starships and dispatch succes with match data", () => {
        const generator = startMatchSaga();

        const mockPeople: IPerson[] = [{ name: "name", mass: "20" }, { name: "name", mass: "30" }];
        const mockStarships: IStarship[] = [{ name: "name", crew: "20" }, { name: "name", crew: "30" }];

        const mockPeopleMatchState: IMatchState = {
            red: { data: { name: "name", mass: "20" }, strength: "20", isWinner: false },
            blue: { data: { name: "name", mass: "30" }, strength: "30", isWinner: true }
        }

        const mockStarshipsMatchState: IMatchState = {
            blue: { data: { name: "name", crew: "30" }, strength: "30", isWinner: true },
            red: { data: { name: "name", crew: "20" }, strength: "20", isWinner: false }
        }

        const successPeopleAction = {
            type: ActionTypes.MATCH_START_SUCCESS,
            payload: mockPeopleMatchState
        };

        const successStarshipsAction = {
            type: ActionTypes.MATCH_START_SUCCESS,
            payload: mockStarshipsMatchState
        };

        generator.next();

        const genValue = generator.next({
            people: mockPeople,
            starships: mockStarships
        }).value;

        if (genValue.payload.action.payload.red.data.crew) {
            expect(genValue).toEqual(put(successStarshipsAction));
        } else {
            expect(genValue).toEqual(put(successPeopleAction));
        }
    });
});