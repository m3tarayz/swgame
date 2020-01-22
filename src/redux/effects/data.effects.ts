import axios from "axios";
import { call, put } from "redux-saga/effects";
import * as actions from "../actions/data.actions";
import { IStarship, IPerson, IDataState } from "../../model";

export async function getData(): Promise<IDataState> {
    try {
        const starships = await getStarships();
        const people = await getPeople();

        return {
            starships: starships,
            people: people,
            loading: false
        }
    } catch (e) {
        return (e);
    }

}

function getStarships(): Promise<IStarship[]> {
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: "https://swapi.co/api/starships/",
        }).then(rsp => { resolve(rsp.data.results) })
            .catch((e: Error) => { throw (e) });
    })

}

function getPeople(): Promise<IPerson[]> {
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: "https://swapi.co/api/people/",
        }).then(rsp => resolve(rsp.data.results))
            .catch((e: Error) => { throw (e) });
    })
}

export function* getDataSaga(): any {
    let payload: any;
    try {
        const response = yield call(getData);
        payload = response;

        yield put(actions.getDataSuccess(payload));

    } catch (error) {
        payload = error;

        yield put(actions.getDataError(payload));
    }
}