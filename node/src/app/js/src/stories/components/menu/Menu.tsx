import * as React from "react";
import { RequestsActions } from "../../helpers/requests";
import { Preloader } from "../../helpers/preloader";

export interface MenuProps {
  commonData: any;
}

export interface MenuState {
  currentScreen: string;
}

const R = new RequestsActions();
const PRL = new Preloader();
const API_URL = process.env.API_URL ? process.env.API_URL : "";

export class Menu extends React.Component<MenuProps, MenuState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentScreen: '',
    };
  }

  updateState = (props: any) => this.setState({ ...this.state, ...props });

  componentWillMount() {
    return;
  }

  render() {
    return (
      <nav
        className="w3-sidebar w3-collapse w3-white w3-animate-left"
        id="mySidebar"
      >
        <br />
        <div className="w3-container w3-row">
          <div className="w3-col s4">
            <img
              src="/w3images/avatar2.png"
              className="w3-circle w3-margin-right"
            />
          </div>
          <div className="w3-col s8 w3-bar">
            <span>
              Приветствую,
              <strong>{/* {  @TODO User Name }   */}</strong>
            </span>
            <br />
            <a href="#" className="w3-bar-item w3-button">
              <i className="fa fa-envelope" />
            </a>
            <a href="#" className="w3-bar-item w3-button">
              <i className="fa fa-user" />
            </a>
            <a href="#" className="w3-bar-item w3-button">
              <i className="fa fa-cog" />
            </a>
          </div>
        </div>
        <hr />
        <div className="w3-container">
          <h5>Dashboard</h5>
        </div>
        <div className="w3-bar-block">
          <a
            href="#"
            className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
            //  onclick="w3_close()"
            //  title="close menu"
          >
            <i className="fa fa-remove fa-fw" />
            Закрыть меню
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding w3-blue">
            <i className="fa fa-users fa-fw" />
            Главная страница
          </a>
        </div>
      </nav>
    );
  }
}
