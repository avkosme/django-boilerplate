import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";

export interface EditBlockProps {
  currentScreen: any;
  updateState: any;
  blocksPage: any;
  currentBlock: any;
  currentPanel: any;
  saveBlock: any;
}

export interface EditBlockState {
  currentPanel: any;
  currentBlock: any;
}

const BASE_URL = process.env.BASE_URL ? process.env.BASE_URL : "";

export class EditBlock extends React.Component<EditBlockProps, EditBlockState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentPanel: this.props.blocksPage[this.props.currentBlock].panels[this.props.currentPanel],
      currentBlock: this.props.blocksPage[this.props.currentBlock]
    };
  }

  handleEditorChange = (key: number, editor: any) =>
    (this.state.currentPanel.content[key] = {
      type: this.state.currentPanel.content[key].type,
      context: editor.target.getContent()
    });

  render() {
    return (
      <div className="w3-main w3-main__page_content">
        <header className="w3-container">
          <h5>
            <b>
              <i className="fa fa-dashboard" /> Редактирование блока -{" "}
              {this.state.currentBlock.name}
            </b>
          </h5>
          <div className="w3-section w3-section__buttons">
            <button
              className="w3-btn w3-ripple w3-blue"
              onClick={() =>
                this.props.updateState({ currentScreen: "main-page" })
              }
            >
              Назад
            </button>
            <button
              className="w3-btn w3-ripple w3-green"
              onClick={() => this.props.saveBlock(this.state.currentPanel)}
            >
              Сохранить
            </button>
            <button className="w3-btn w3-ripple w3-red">Удалить</button>
          </div>
        </header>
        <div className="w3-row-padding w3-margin w3-text-gray w3-small w3-border-bottom">
          <form>
            {this.state.currentPanel.content.map(
              (content: any, content_key: number) => {
                if (content.length === 0) {
                  return;
                }
                switch (content.type) {
                  case "text":
                    return (
                      <Editor
                        initialValue={content.context}
                        init={{
                          plugins:
                            "advlist autolink lists link image charmap print preview anchor textcolor searchreplace visualblocks code fullscreen insertdatetime media table contextmenu paste code help spellchecker",
                          toolbar:
                            "undo redo | bold italic | alignleft aligncenter alignright | code | spellchecker",
                          spellchecker_rpc_url:
                            "//speller.yandex.net/services/tinyspell",
                          spellchecker_languages: "Russian=ru",
                          spellchecker_language: "ru",
                          language: "ru",
                          language_url: BASE_URL + "/static/js/tinymce-ru.js",
                          height: 400
                        }}
                        onChange={editor =>
                          this.handleEditorChange(content_key, editor)
                        }
                      />
                    );
                  default:
                    break;
                }
              }
            )}
          </form>
        </div>
      </div>
    );
  }
}
