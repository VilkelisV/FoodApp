import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.scss";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./state/reducers";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
    ,
  </Provider>,
  document.getElementById("root")
);
