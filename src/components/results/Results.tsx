import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { IResultState } from "../../model";
import { IStoreState } from "../../redux/reducers";

const Results: React.FC = () => {
  const data: IResultState = useSelector(
    (state: IStoreState) => state.results
  );
  console.log(data);
  return (
    <div>
      {data &&
        data.results.map((result, index) => (
          <div key={index}>
            {result}
          </div>
        ))}
    </div>
  );
};

export default Results;
