import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Menu } from "./components/menu/Menu";
import { MainPage } from "./components/main-page/MainPage";

declare global {
  interface Window {
    currentScreen: string;
    commonData: any;
  }
}

storiesOf("Dashboard", module)
  .add("menu", () => <Menu commonData={{}} />)
  .add("main-page", () => (
    <MainPage
      commonData={{
        currentScreen: "main-page",
        blocksPage: [
          {
            name: "Приветствие на главной - 1",
            panels: [
              {
                classWrapper: "w3-col l2",
                classContent: "w3-container w3-light-gray w3-padding-16",
                content: []
              },
              {
                classWrapper: "w3-col l8 w3-hover-sepia w3-hover-sepia__mouse",
                classContent: "w3-container w3-pale-green w3-padding-16",
                content: [
                  {
                    type: "text",
                    context: "Наша основная задача - решение Ваших проблем! - 1"
                  },
                  {
                    type: "text",
                    context:
                      "<span>Юристы</span> . <span>Адвокаты</span> . <span>Эксперты</span>"
                  }
                ]
              },
              {
                classWrapper: "w3-col l2",
                classContent: "w3-container w3-light-gray w3-padding-16",
                content: []
              }
            ]
          },
          {
            name: "Приветствие на главной - 2",
            panels: [
              {
                classWrapper: "w3-col l2",
                classContent: "w3-container w3-light-gray w3-padding-16",
                content: []
              },
              {
                classWrapper: "w3-col l8 w3-hover-sepia w3-hover-sepia__mouse",
                classContent: "w3-container w3-pale-green w3-padding-16",
                content: [
                  {
                    type: "text",
                    context: "Наша основная задача - решение Ваших проблем! - 2"
                  },
                  {
                    type: "text",
                    context:
                      "<span>Юристы</span> . <span>Адвокаты</span> . <span>Эксперты</span>"
                  }
                ]
              },
              {
                classWrapper: "w3-col l2",
                classContent: "w3-container w3-light-gray w3-padding-16",
                content: []
              }
            ]
          }
        ]
      }}
    />
  ));
