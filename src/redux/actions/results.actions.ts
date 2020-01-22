import { IMatchState } from "../../model";

export enum ActionTypes {
    RESULT_SAVE = "[RESULT] Save",
}

interface IResultSave {
    readonly type: ActionTypes.RESULT_SAVE;
    payload: IMatchState;
}

export type Actions = IResultSave;

export function resultSave(response: IMatchState): IResultSave {
    return {
        type: ActionTypes.RESULT_SAVE,
        payload: response,
    };
}
