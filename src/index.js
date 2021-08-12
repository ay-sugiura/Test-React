import React from "react";
import ReactDom from "react-dom";
import App from "./App";

//JSX記法＝要素を返す記法が使えるJS（byゆーたん）

//Appをコンポーネントとしてレンダリングする。
ReactDom.render(<App />, document.getElementById("root"));
//ReactDOM.render(element, container[, callback])
