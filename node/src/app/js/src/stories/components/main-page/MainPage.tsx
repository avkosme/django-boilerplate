import * as React from "react";
import { RequestsActions } from "../../helpers/requests";
import { Preloader } from "../../helpers/preloader";
import { Layout } from "./Layout";
import { EditBlock } from "./EditBlock";

export interface MainPageProps {
  commonData: any;
}

export interface MainPageState {
  currentScreen: string;
  blocksPage: any;
  currentBlock: any;
  currentPanel: any;
}

const R = new RequestsActions();
const PRL = new Preloader();
const API_URL = process.env.API_URL ? process.env.API_URL : "";

export class MainPage extends React.Component<MainPageProps, MainPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentScreen: this.props.commonData.currentScreen,
      blocksPage: this.props.commonData.blocksPage,
      currentBlock: NaN,
      currentPanel: NaN
    };
  }

  updateState = (props: any) => this.setState({ ...this.state, ...props });

  componentWillMount() {
    return;
  }

  saveBlock = (currentPanel: any) =>{
    R.postRequest(this.state.blocksPage, API_URL + "/page/").then(json => {
//      console.log(json);
    });
  }

  render() {
    switch (this.state.currentScreen) {
      case "edit-block":
        return (
          <EditBlock
            {...this.state}
            updateState={this.updateState}
            saveBlock={this.saveBlock}
          />
        );

      default:
        return <Layout {...this.state} updateState={this.updateState} />;
    }
  }
}
