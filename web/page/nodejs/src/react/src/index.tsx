import * as React from "react";
import * as ReactDOM from "react-dom";

import { Main } from "./components/main";

declare global {
    interface Window {
        firstName: string;
    }
}

ReactDOM.render(
    <Main
        firstName={window.firstName}
    />,
    document.getElementById("main-root")
);
