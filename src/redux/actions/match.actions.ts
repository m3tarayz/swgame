import { IMatchState } from "../../model";

export enum ActionTypes {
    MATCH_START_INIT = "[MATCH] Start Init",
    MATCH_START_SUCCESS = "[MATCH] Start Success",
    MATCH_START_ERROR = "[MATCH] Start Error",
}

interface IMatchStartInit {
    readonly type: ActionTypes.MATCH_START_INIT;
}

interface IMatchStartSuccess {
    readonly type: ActionTypes.MATCH_START_SUCCESS;
    payload: IMatchState;
}

interface IMatchStartError {
    readonly type: ActionTypes.MATCH_START_ERROR;
    payload: any;
}

export type Actions = IMatchStartInit | IMatchStartSuccess | IMatchStartError;

export function matchStartInit(): IMatchStartInit {
    return {
        type: ActionTypes.MATCH_START_INIT
    };
}

export function matchStartSuccess(response: IMatchState): IMatchStartSuccess {
    return {
        type: ActionTypes.MATCH_START_SUCCESS,
        payload: response,
    };
}

export function matchStartError(response: any): IMatchStartError {
    return {
        type: ActionTypes.MATCH_START_ERROR,
        payload: response,
    };
}