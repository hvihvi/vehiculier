import React from "react";
import { Provider } from "react-redux";
import * as Redux from "redux";
import vehiculier from "./vehiculier/store/vehiculier";
import VehiculeTable from "./vehiculier/containers/VehiculeTable";

const store = Redux.createStore(
  Redux.combineReducers({ vehiculier }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <VehiculeTable />
  </Provider>
);

export default App;
