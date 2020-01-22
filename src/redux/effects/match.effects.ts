import { put, select } from "redux-saga/effects";

import * as matchActions from "../actions/match.actions";
import * as resultActions from "../actions/results.actions";
import { getData } from "../selectors/data.selector";
import { IMatchState, IDataState, IStarship, IPerson } from "../../model";
import { uniqueRandomNumber } from "./effects.util";

export function* startMatchSaga(): any {
    let payload: IMatchState;

    try {
        const data: IDataState = yield select(getData);
        const matchPool = choosePool(data);

        payload = createMatchState(matchPool);

        yield put(matchActions.matchStartSuccess(payload));
        yield put(resultActions.resultSave(payload));
    } catch (error) {
        payload = error;

        yield put(matchActions.matchStartError(payload));
    }
}

export function choosePool(data: IDataState): IStarship[] | IPerson[] {
    return uniqueRandomNumber(1) ? data.people : data.starships;
}

function createMatchState(matchPool: IStarship[] | IPerson[]): IMatchState {
    const randomIndex = uniqueRandomNumber(matchPool.length);
    const randomIndex2 = uniqueRandomNumber(matchPool.length, randomIndex);

    const red: IStarship | IPerson = matchPool[randomIndex];
    const blue: IStarship | IPerson = matchPool[randomIndex2];
    let winner: IStarship | IPerson | undefined;

    if ((red as IStarship).crew) {
        const redStrength = parseInt((red as IStarship).crew);
        const blueStrength = parseInt((blue as IStarship).crew);
        winner = (redStrength > blueStrength) ? (red) : ((blueStrength > redStrength) ? (blue) : undefined);

    } else {
        const redStrength = parseInt((red as IPerson).mass);
        const blueStrength = parseInt((blue as IPerson).mass);
        winner = (redStrength > blueStrength) ? (red) : ((blueStrength > redStrength) ? (blue) : undefined);
    }

    return {
        red: {
            data: red,
            strength: (red as IStarship).crew || (red as IPerson).mass,
            isWinner: winner === red
        },
        blue: {
            data: blue,
            strength: (blue as IStarship).crew || (blue as IPerson).mass,
            isWinner: winner === blue
        }
    }
}