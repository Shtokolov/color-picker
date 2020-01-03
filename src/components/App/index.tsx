import React from "react";
import GlobalStyles from "./GlobalStyles";
import ColorPicker from "../../containers/colorPicker";
import { Provider } from "react-redux";
import Wrapper from "./Wrapper";
import configureStore from "../../state";
const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);

function createColor(label: string, hexCode: string) {
  return { label: label.toUpperCase(), hexCode };
}

const colors = [
  createColor("red", "#cf2c1f"),
  createColor("yellow", "#cbd655"),
  createColor("green", "#56d254"),
  createColor("blue", "#195ccb")
];

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <GlobalStyles />
        <ColorPicker
          value="#8D59CB"
          onChange={() => console.log("changed")}
          colors={colors}
        />
      </Wrapper>
    </Provider>
  );
};

export default App;
