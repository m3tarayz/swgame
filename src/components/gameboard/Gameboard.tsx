import React from "react";
import { push } from "connected-react-router";
import { useSelector, useDispatch } from "react-redux";

import { matchStartInit } from "../../redux/actions/match.actions";
import Card from "../card/Card";
import styles from "./Gameboard.module.scss";
import { IMatchState } from "../../model";
import { IStoreState } from "../../redux/reducers";

const baseClass = "gameboard";

const Gameboard: React.FC = () => {
  const dispatch: any = useDispatch();
  const matchData: IMatchState = useSelector(
    (state: IStoreState) => state.match
  );


  return (
    <div className={styles[baseClass]}>
      <div className={styles[`${baseClass}__play-area`]}>
        <div className={styles[`${baseClass}__play-area__red`]}>
          {matchData.ready && <Card data={matchData.red} />}
        </div>
        <div className={styles[`${baseClass}__play-area__blue`]}>
          {matchData.ready && <Card data={matchData.blue} />}
        </div>
      </div>
      <div className={styles[`${baseClass}__actions`]}>
        <button onClick={() => dispatch(matchStartInit())}>Begin Battle</button>
      </div>

      <div className={styles[`${baseClass}__actions`]}>
        <button onClick={() => dispatch(push("/results"))}>Show Results</button>
      </div>
    </div>
  );
};

export default Gameboard;
