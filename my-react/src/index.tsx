import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    // HashRouter as Router
    BrowserRouter as Router
} from "react-router-dom";
// 1-引入Provider
import {
    Provider
} from "react-redux";
import App from "@/App";
import store from "@/store";

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);
root.render(
    // 2- 使用Provider,将仓库进行传递
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);
