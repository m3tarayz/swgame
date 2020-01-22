import { IDataState } from "../../model";

export enum ActionTypes {
    DATA_GET_INIT = "[DATA] Get Init",
    DATA_GET_SUCCESS = "[DATA] Get Success",
    DATA_GET_ERROR = "[DATA] Get Error"
}

interface IDataGetInit {
    readonly type: ActionTypes.DATA_GET_INIT;
}

interface IDataGetSuccess {
    readonly type: ActionTypes.DATA_GET_SUCCESS;
    payload: IDataState;
}

interface IDataGetError {
    readonly type: ActionTypes.DATA_GET_ERROR;
    payload: any;
}

export type Actions = IDataGetInit | IDataGetSuccess | IDataGetError;

export function getDataInit(): IDataGetInit {
    return {
        type: ActionTypes.DATA_GET_INIT,
    };
}

export function getDataSuccess(response: IDataState): IDataGetSuccess {
    return {
        type: ActionTypes.DATA_GET_SUCCESS,
        payload: response,
    };
}

export function getDataError(response: any): IDataGetError {
    return {
        type: ActionTypes.DATA_GET_ERROR,
        payload: response,
    };
}