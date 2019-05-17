import * as React from "react";
import * as ReactDOM from "react-dom";

import { Menu } from "./stories/components/menu/Menu";
import { MainPage } from "./stories/components/main-page/MainPage";

declare global {
  interface Window {
    commonData: any;
  }
}

ReactDOM.render(
  [
    <Menu commonData={window.commonData} />,
    <MainPage commonData={window.commonData} />,
  ],
  document.getElementById("root-app")
);
