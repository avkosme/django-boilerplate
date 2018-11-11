import * as React from "react";

declare var window: {
    [key:string]: any;
}
export class Main extends React.Component<any, any> {

    render() {
        return <div>Hello world {window.firstName} from react!</div>
    }
}