import React from "react";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { act } from "react-dom/test-utils";
import { mount, configure } from "enzyme";
import renderer from "react-test-renderer";

import Gameboard from "./Gameboard";
import { matchStartInit } from "../../redux/actions/match.actions";

const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

describe("Gameboard", () => {
  let store: any;
  let component: React.FC | any;

  beforeEach(() => {
    store = mockStore({
      match: { ready: false }
    });

    store.dispatch = jest.fn();

    act(() => {
      component = mount(
        <Provider store={store}>
          <Gameboard />
        </Provider>
      );
    });
  });

  it("should render the component with a redux store", () => {
    const mockComponent = renderer
      .create(
        <Provider store={store}>
          <Gameboard />
        </Provider>
      )
      .toJSON();

    expect(mockComponent).toMatchSnapshot();
  });

  it("should render 2 card components if match is ready", () => {
    const store = mockStore({
      match: {
        ready: true,
        red: { data: {} },
        blue: { data: {} }
      }
    });

    const wrapper = mount(
      <Provider store={store}>
        <Gameboard />
      </Provider>
    );

    expect(wrapper.find("Card")).toHaveLength(2);
  });

  it("should not render any card components if match is not ready", () => {
    const store = mockStore({
      match: {
        ready: false
      }
    });

    const wrapper = mount(
      <Provider store={store}>
        <Gameboard />
      </Provider>
    );

    expect(wrapper.find("Card")).toHaveLength(0);
  });

  it("should dispatch matchStartInit action on button click", () => {
    const button = component.find("button");

    expect(button).toHaveLength(1);
    button.simulate("click");
    expect(store.dispatch).toHaveBeenCalledWith(matchStartInit());
  });
});
