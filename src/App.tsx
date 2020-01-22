import React, { useEffect } from "react";
import "./App.css";
import Gameboard from "./components/gameboard/Gameboard";
import { useSelector, useDispatch } from "react-redux";

import { getDataInit } from "./redux/actions/data.actions";
import { IDataState } from "./model";
import { IStoreState } from "./redux/reducers";

const App: React.FC = () => {
  const data: IDataState = useSelector((state: IStoreState) => state.data);
  const dispatch: any = useDispatch();
  const isLoading = data.loading;

  useEffect(() => {
    dispatch(getDataInit());
  }, []);

  return (
    <div className="App">
      {isLoading && <div>loading...</div>}
      {!isLoading && <Gameboard />}
    </div>
  );
};

export default App;
