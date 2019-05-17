import * as React from "react";

export interface LayoutProps {
  currentScreen: any;
  updateState: any;
  blocksPage: any;
}

export interface LayoutState {}

export class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="w3-main w3-main__page_content">
        <header className="w3-container">
          <h5>
            <b>
              <i className="fa fa-dashboard" /> Главная страница
            </b>
          </h5>
        </header>

        {/* Block */}
        {this.props.blocksPage.map((block: any, block_key:number) => [
          <div className="w3-row-padding w3-margin w3-text-gray w3-small w3-border-bottom">
            {block.name}
          </div>,
          <div className="w3-row-padding w3-margin-bottom">
            {/* Panel */}
            {block.panels.map((panel: any, panel_key: number) => (
              <div className={panel.classWrapper} key={panel_key}>
                <div
                  className={panel.classContent}
                  onClick={() => {
                    panel.content.length ?
                    this.props.updateState({
                      currentScreen: "edit-block",
                      currentBlock: block_key,
                      currentPanel: panel_key,
                    }) : false
                  }}
                >
                  <div className="w3-left">
                    {/* Content */}
                    {panel.content.length ? (
                      panel.content.map((content: any, content_key: number) =>
                        // Content type text
                        content.type === "text" ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: content.context
                            }}
                            key={content_key}
                          />
                        ) : (
                          ""
                        )
                      )
                    ) : (
                      <br />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ])}
        <footer className="w3-container w3-padding-16 w3-light-grey">
          <h4 />
          <p />
        </footer>
      </div>
    );
  }
}
