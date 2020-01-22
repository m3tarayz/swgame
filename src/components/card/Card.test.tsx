import React from "react";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { act } from "react-dom/test-utils";
import { mount, configure, shallow } from "enzyme";
import renderer from "react-test-renderer";

import Card from "./Card";
import { matchStartInit } from "../../redux/actions/match.actions";
import { IOpponent, IStarship } from "../../model";

configure({ adapter: new Adapter() });

describe("Card", () => {
  let component: React.FC | any;

  let props: IOpponent = {
    data: { name: "", mass: "", crew: "" },
    strength: "",
    isWinner: false
  };

  beforeEach(() => {
    component = shallow(<Card data={props} />);
  });

  it("should hide win message if isWinner is false", () => {
    expect(component.find("h3")).toHaveLength(0);
  });

  it("should show win message if isWinner is true", () => {
    const component = shallow(<Card data={{ ...props, isWinner: true }} />);
    expect(component.find("h3")).toHaveLength(1);
  });
});
