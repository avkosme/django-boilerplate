// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app/js/src/index.tsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/js/src/index.tsx":
/*!**********************************!*\
  !*** ./src/app/js/src/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./src/app/js/node_modules/react/index.js");
const ReactDOM = __webpack_require__(/*! react-dom */ "./src/app/js/node_modules/react-dom/index.js");
const Menu_1 = __webpack_require__(/*! ./stories/components/menu/Menu */ "./src/app/js/src/stories/components/menu/Menu.tsx");
const MainPage_1 = __webpack_require__(/*! ./stories/components/main-page/MainPage */ "./src/app/js/src/stories/components/main-page/MainPage.tsx");
ReactDOM.render([
    React.createElement(Menu_1.Menu, { commonData: window.commonData }),
    React.createElement(MainPage_1.MainPage, { commonData: window.commonData }),
], document.getElementById("root-app"));


/***/ }),

/***/ "./src/app/js/src/stories/components/main-page/EditBlock.tsx":
/*!*******************************************************************!*\
  !*** ./src/app/js/src/stories/components/main-page/EditBlock.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./src/app/js/node_modules/react/index.js");
const tinymce_react_1 = __webpack_require__(/*! @tinymce/tinymce-react */ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js");
const BASE_URL = process.env.BASE_URL ? process.env.BASE_URL : "";
class EditBlock extends React.Component {
    constructor(props) {
        super(props);
        this.handleEditorChange = (key, editor) => (this.state.currentPanel.content[key] = {
            type: this.state.currentPanel.content[key].type,
            context: editor.target.getContent()
        });
        this.state = {
            currentPanel: this.props.blocksPage[this.props.currentBlock].panels[this.props.currentPanel],
            currentBlock: this.props.blocksPage[this.props.currentBlock]
        };
    }
    render() {
        return (React.createElement("div", { className: "w3-main w3-main__page_content" },
            React.createElement("header", { className: "w3-container" },
                React.createElement("h5", null,
                    React.createElement("b", null,
                        React.createElement("i", { className: "fa fa-dashboard" }),
                        " \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430 -",
                        " ",
                        this.state.currentBlock.name)),
                React.createElement("div", { className: "w3-section w3-section__buttons" },
                    React.createElement("button", { className: "w3-btn w3-ripple w3-blue", onClick: () => this.props.updateState({ currentScreen: "main-page" }) }, "\u041D\u0430\u0437\u0430\u0434"),
                    React.createElement("button", { className: "w3-btn w3-ripple w3-green", onClick: () => this.props.saveBlock(this.state.currentPanel) }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
                    React.createElement("button", { className: "w3-btn w3-ripple w3-red" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))),
            React.createElement("div", { className: "w3-row-padding w3-margin w3-text-gray w3-small w3-border-bottom" },
                React.createElement("form", null, this.state.currentPanel.content.map((content, content_key) => {
                    if (content.length === 0) {
                        return;
                    }
                    switch (content.type) {
                        case "text":
                            return (React.createElement(tinymce_react_1.Editor, { initialValue: content.context, init: {
                                    plugins: "advlist autolink lists link image charmap print preview anchor textcolor searchreplace visualblocks code fullscreen insertdatetime media table contextmenu paste code help spellchecker",
                                    toolbar: "undo redo | bold italic | alignleft aligncenter alignright | code | spellchecker",
                                    spellchecker_rpc_url: "//speller.yandex.net/services/tinyspell",
                                    spellchecker_languages: "Russian=ru",
                                    spellchecker_language: "ru",
                                    language: "ru",
                                    language_url: BASE_URL + "/static/js/tinymce-ru.js",
                                    height: 400
                                }, onChange: editor => this.handleEditorChange(content_key, editor) }));
                        default:
                            break;
                    }
                })))));
    }
}
exports.EditBlock = EditBlock;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/app/js/src/stories/components/main-page/Layout.tsx":
/*!****************************************************************!*\
  !*** ./src/app/js/src/stories/components/main-page/Layout.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./src/app/js/node_modules/react/index.js");
class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "w3-main w3-main__page_content" },
            React.createElement("header", { className: "w3-container" },
                React.createElement("h5", null,
                    React.createElement("b", null,
                        React.createElement("i", { className: "fa fa-dashboard" }),
                        " \u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"))),
            this.props.blocksPage.map((block, block_key) => [
                React.createElement("div", { className: "w3-row-padding w3-margin w3-text-gray w3-small w3-border-bottom" }, block.name),
                React.createElement("div", { className: "w3-row-padding w3-margin-bottom" }, block.panels.map((panel, panel_key) => (React.createElement("div", { className: panel.classWrapper, key: panel_key },
                    React.createElement("div", { className: panel.classContent, onClick: () => {
                            panel.content.length ?
                                this.props.updateState({
                                    currentScreen: "edit-block",
                                    currentBlock: block_key,
                                    currentPanel: panel_key,
                                }) : false;
                        } },
                        React.createElement("div", { className: "w3-left" }, panel.content.length ? (panel.content.map((content, content_key) => 
                        // Content type text
                        content.type === "text" ? (React.createElement("div", { dangerouslySetInnerHTML: {
                                __html: content.context
                            }, key: content_key })) : (""))) : (React.createElement("br", null))))))))
            ]),
            React.createElement("footer", { className: "w3-container w3-padding-16 w3-light-grey" },
                React.createElement("h4", null),
                React.createElement("p", null))));
    }
}
exports.Layout = Layout;


/***/ }),

/***/ "./src/app/js/src/stories/components/main-page/MainPage.tsx":
/*!******************************************************************!*\
  !*** ./src/app/js/src/stories/components/main-page/MainPage.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./src/app/js/node_modules/react/index.js");
const requests_1 = __webpack_require__(/*! ../../helpers/requests */ "./src/app/js/src/stories/helpers/requests.tsx");
const preloader_1 = __webpack_require__(/*! ../../helpers/preloader */ "./src/app/js/src/stories/helpers/preloader.tsx");
const Layout_1 = __webpack_require__(/*! ./Layout */ "./src/app/js/src/stories/components/main-page/Layout.tsx");
const EditBlock_1 = __webpack_require__(/*! ./EditBlock */ "./src/app/js/src/stories/components/main-page/EditBlock.tsx");
const R = new requests_1.RequestsActions();
const PRL = new preloader_1.Preloader();
const API_URL = process.env.API_URL ? process.env.API_URL : "";
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.updateState = (props) => this.setState(Object.assign({}, this.state, props));
        this.saveBlock = (currentPanel) => {
            R.postRequest(this.state.blocksPage, API_URL + "/page/").then(json => {
                //      console.log(json);
            });
        };
        this.state = {
            currentScreen: this.props.commonData.currentScreen,
            blocksPage: this.props.commonData.blocksPage,
            currentBlock: NaN,
            currentPanel: NaN
        };
    }
    componentWillMount() {
        return;
    }
    render() {
        switch (this.state.currentScreen) {
            case "edit-block":
                return (React.createElement(EditBlock_1.EditBlock, Object.assign({}, this.state, { updateState: this.updateState, saveBlock: this.saveBlock })));
            default:
                return React.createElement(Layout_1.Layout, Object.assign({}, this.state, { updateState: this.updateState }));
        }
    }
}
exports.MainPage = MainPage;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/app/js/src/stories/components/menu/Menu.tsx":
/*!*********************************************************!*\
  !*** ./src/app/js/src/stories/components/menu/Menu.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./src/app/js/node_modules/react/index.js");
const requests_1 = __webpack_require__(/*! ../../helpers/requests */ "./src/app/js/src/stories/helpers/requests.tsx");
const preloader_1 = __webpack_require__(/*! ../../helpers/preloader */ "./src/app/js/src/stories/helpers/preloader.tsx");
const R = new requests_1.RequestsActions();
const PRL = new preloader_1.Preloader();
const API_URL = process.env.API_URL ? process.env.API_URL : "";
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.updateState = (props) => this.setState(Object.assign({}, this.state, props));
        this.state = {
            currentScreen: '',
        };
    }
    componentWillMount() {
        return;
    }
    render() {
        return (React.createElement("nav", { className: "w3-sidebar w3-collapse w3-white w3-animate-left", id: "mySidebar" },
            React.createElement("br", null),
            React.createElement("div", { className: "w3-container w3-row" },
                React.createElement("div", { className: "w3-col s4" },
                    React.createElement("img", { src: "/w3images/avatar2.png", className: "w3-circle w3-margin-right" })),
                React.createElement("div", { className: "w3-col s8 w3-bar" },
                    React.createElement("span", null,
                        "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E,",
                        React.createElement("strong", null)),
                    React.createElement("br", null),
                    React.createElement("a", { href: "#", className: "w3-bar-item w3-button" },
                        React.createElement("i", { className: "fa fa-envelope" })),
                    React.createElement("a", { href: "#", className: "w3-bar-item w3-button" },
                        React.createElement("i", { className: "fa fa-user" })),
                    React.createElement("a", { href: "#", className: "w3-bar-item w3-button" },
                        React.createElement("i", { className: "fa fa-cog" })))),
            React.createElement("hr", null),
            React.createElement("div", { className: "w3-container" },
                React.createElement("h5", null, "Dashboard")),
            React.createElement("div", { className: "w3-bar-block" },
                React.createElement("a", { href: "#", className: "w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" },
                    React.createElement("i", { className: "fa fa-remove fa-fw" }),
                    "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),
                React.createElement("a", { href: "#", className: "w3-bar-item w3-button w3-padding w3-blue" },
                    React.createElement("i", { className: "fa fa-users fa-fw" }),
                    "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"))));
    }
}
exports.Menu = Menu;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/app/js/src/stories/helpers/preloader.tsx":
/*!******************************************************!*\
  !*** ./src/app/js/src/stories/helpers/preloader.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Preloader {
    hidePreloader() {
        try {
            document.getElementById("preloader").style.display = "none";
        }
        catch (error) { }
    }
    showPreloader() {
        try {
            document.getElementById("preloader").style.display = "block";
        }
        catch (error) { }
    }
}
exports.Preloader = Preloader;


/***/ }),

/***/ "./src/app/js/src/stories/helpers/requests.tsx":
/*!*****************************************************!*\
  !*** ./src/app/js/src/stories/helpers/requests.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RequestsActions {
    constructor() {
        this.toQueryString = (params) => {
            if (!params) {
                return "";
            }
            if (!Object.keys(params).length) {
                return "";
            }
            return ("?" +
                Object.keys(params)
                    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                    .join("&"));
        };
    }
    getCoockie() {
        let str = document.cookie.split("; ");
        let result = {};
        for (let i = 0; i < str.length; i++) {
            let cur = str[i].split("=");
            result[cur[0]] = cur[1];
        }
        return result;
    }
    postRequest(params, url) {
        let props = {
            method: "post",
            body: JSON.stringify(params)
        };
        if (true) {
            (props["mode"] = "no-cors"),
                (props["headers"] = {
                    "Content-Type": "application/json;charset=UTF-8",
                    Accept: "application/json"
                });
        }
        if (false) {}
        return fetch(url, props)
            .then(response => {
            switch (response.status) {
                case 401: {
                    return window.location.replace("logout/");
                }
                case 200: {
                    return response.json();
                }
            }
        })
            .catch(e => {
            console.log(e);
        });
    }
    getRequest(params, url) {
        fetch(url + this.toQueryString(params), {
            method: "get",
            credentials: "same-origin"
        })
            .then(response => {
            switch (response.status) {
                case 200:
                    return response.json();
                default:
                    break;
            }
        })
            .catch(e => {
            console.log(e);
        });
    }
}
exports.RequestsActions = RequestsActions;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9qcy9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvanMvc3JjL3N0b3JpZXMvY29tcG9uZW50cy9tYWluLXBhZ2UvRWRpdEJsb2NrLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2pzL3NyYy9zdG9yaWVzL2NvbXBvbmVudHMvbWFpbi1wYWdlL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9qcy9zcmMvc3Rvcmllcy9jb21wb25lbnRzL21haW4tcGFnZS9NYWluUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9qcy9zcmMvc3Rvcmllcy9jb21wb25lbnRzL21lbnUvTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9qcy9zcmMvc3Rvcmllcy9oZWxwZXJzL3ByZWxvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9qcy9zcmMvc3Rvcmllcy9oZWxwZXJzL3JlcXVlc3RzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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R0FBRyxDQUFDLENBQUM7b0JBQ1IsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDM0M7Z0JBQ0QsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDUixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQWMsRUFBRSxHQUFXO1FBQ3BDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN0QyxNQUFNLEVBQUUsS0FBSztZQUNiLFdBQVcsRUFBRSxhQUFhO1NBQzNCLENBQUM7YUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDZixRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLEtBQUssR0FBRztvQkFDTixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFekI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRjtBQXJGRCwwQ0FxRkMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvYXBwL2pzL3NyYy9pbmRleC50c3hcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4vc3Rvcmllcy9jb21wb25lbnRzL21lbnUvTWVudVwiO1xuaW1wb3J0IHsgTWFpblBhZ2UgfSBmcm9tIFwiLi9zdG9yaWVzL2NvbXBvbmVudHMvbWFpbi1wYWdlL01haW5QYWdlXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgY29tbW9uRGF0YTogYW55O1xuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgW1xuICAgIDxNZW51IGNvbW1vbkRhdGE9e3dpbmRvdy5jb21tb25EYXRhfSAvPixcbiAgICA8TWFpblBhZ2UgY29tbW9uRGF0YT17d2luZG93LmNvbW1vbkRhdGF9IC8+LFxuICBdLFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3QtYXBwXCIpXG4pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tIFwiQHRpbnltY2UvdGlueW1jZS1yZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRCbG9ja1Byb3BzIHtcbiAgY3VycmVudFNjcmVlbjogYW55O1xuICB1cGRhdGVTdGF0ZTogYW55O1xuICBibG9ja3NQYWdlOiBhbnk7XG4gIGN1cnJlbnRCbG9jazogYW55O1xuICBjdXJyZW50UGFuZWw6IGFueTtcbiAgc2F2ZUJsb2NrOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdEJsb2NrU3RhdGUge1xuICBjdXJyZW50UGFuZWw6IGFueTtcbiAgY3VycmVudEJsb2NrOiBhbnk7XG59XG5cbmNvbnN0IEJBU0VfVVJMID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkwgPyBwcm9jZXNzLmVudi5CQVNFX1VSTCA6IFwiXCI7XG5cbmV4cG9ydCBjbGFzcyBFZGl0QmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RWRpdEJsb2NrUHJvcHMsIEVkaXRCbG9ja1N0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRQYW5lbDogdGhpcy5wcm9wcy5ibG9ja3NQYWdlW3RoaXMucHJvcHMuY3VycmVudEJsb2NrXS5wYW5lbHNbdGhpcy5wcm9wcy5jdXJyZW50UGFuZWxdLFxuICAgICAgY3VycmVudEJsb2NrOiB0aGlzLnByb3BzLmJsb2Nrc1BhZ2VbdGhpcy5wcm9wcy5jdXJyZW50QmxvY2tdXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUVkaXRvckNoYW5nZSA9IChrZXk6IG51bWJlciwgZWRpdG9yOiBhbnkpID0+XG4gICAgKHRoaXMuc3RhdGUuY3VycmVudFBhbmVsLmNvbnRlbnRba2V5XSA9IHtcbiAgICAgIHR5cGU6IHRoaXMuc3RhdGUuY3VycmVudFBhbmVsLmNvbnRlbnRba2V5XS50eXBlLFxuICAgICAgY29udGV4dDogZWRpdG9yLnRhcmdldC5nZXRDb250ZW50KClcbiAgICB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtbWFpbiB3My1tYWluX19wYWdlX2NvbnRlbnRcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCIgLz4g0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQsdC70L7QutCwIC17XCIgXCJ9XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRCbG9jay5uYW1lfVxuICAgICAgICAgICAgPC9iPlxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1zZWN0aW9uIHczLXNlY3Rpb25fX2J1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidzMtYnRuIHczLXJpcHBsZSB3My1ibHVlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVN0YXRlKHsgY3VycmVudFNjcmVlbjogXCJtYWluLXBhZ2VcIiB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgINCd0LDQt9Cw0LRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3My1idG4gdzMtcmlwcGxlIHczLWdyZWVuXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zYXZlQmxvY2sodGhpcy5zdGF0ZS5jdXJyZW50UGFuZWwpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3My1idG4gdzMtcmlwcGxlIHczLXJlZFwiPtCj0LTQsNC70LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXJvdy1wYWRkaW5nIHczLW1hcmdpbiB3My10ZXh0LWdyYXkgdzMtc21hbGwgdzMtYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudFBhbmVsLmNvbnRlbnQubWFwKFxuICAgICAgICAgICAgICAoY29udGVudDogYW55LCBjb250ZW50X2tleTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29udGVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17Y29udGVudC5jb250ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWR2bGlzdCBhdXRvbGluayBsaXN0cyBsaW5rIGltYWdlIGNoYXJtYXAgcHJpbnQgcHJldmlldyBhbmNob3IgdGV4dGNvbG9yIHNlYXJjaHJlcGxhY2UgdmlzdWFsYmxvY2tzIGNvZGUgZnVsbHNjcmVlbiBpbnNlcnRkYXRldGltZSBtZWRpYSB0YWJsZSBjb250ZXh0bWVudSBwYXN0ZSBjb2RlIGhlbHAgc3BlbGxjaGVja2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgY29kZSB8IHNwZWxsY2hlY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrZXJfcnBjX3VybDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi8vc3BlbGxlci55YW5kZXgubmV0L3NlcnZpY2VzL3RpbnlzcGVsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVsbGNoZWNrZXJfbGFuZ3VhZ2VzOiBcIlJ1c3NpYW49cnVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlbGxjaGVja2VyX2xhbmd1YWdlOiBcInJ1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcInJ1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlX3VybDogQkFTRV9VUkwgKyBcIi9zdGF0aWMvanMvdGlueW1jZS1ydS5qc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlZGl0b3IgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2UoY29udGVudF9rZXksIGVkaXRvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gIGN1cnJlbnRTY3JlZW46IGFueTtcbiAgdXBkYXRlU3RhdGU6IGFueTtcbiAgYmxvY2tzUGFnZTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlIHt9XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TGF5b3V0UHJvcHMsIExheW91dFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtbWFpbiB3My1tYWluX19wYWdlX2NvbnRlbnRcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3My1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZGFzaGJvYXJkXCIgLz4g0JPQu9Cw0LLQvdCw0Y8g0YHRgtGA0LDQvdC40YbQsFxuICAgICAgICAgICAgPC9iPlxuICAgICAgICAgIDwvaDU+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIHsvKiBCbG9jayAqL31cbiAgICAgICAge3RoaXMucHJvcHMuYmxvY2tzUGFnZS5tYXAoKGJsb2NrOiBhbnksIGJsb2NrX2tleTpudW1iZXIpID0+IFtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLXJvdy1wYWRkaW5nIHczLW1hcmdpbiB3My10ZXh0LWdyYXkgdzMtc21hbGwgdzMtYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAge2Jsb2NrLm5hbWV9XG4gICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtcm93LXBhZGRpbmcgdzMtbWFyZ2luLWJvdHRvbVwiPlxuICAgICAgICAgICAgey8qIFBhbmVsICovfVxuICAgICAgICAgICAge2Jsb2NrLnBhbmVscy5tYXAoKHBhbmVsOiBhbnksIHBhbmVsX2tleTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwYW5lbC5jbGFzc1dyYXBwZXJ9IGtleT17cGFuZWxfa2V5fT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhbmVsLmNsYXNzQ29udGVudH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGFuZWwuY29udGVudC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2NyZWVuOiBcImVkaXQtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QmxvY2s6IGJsb2NrX2tleSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFuZWw6IHBhbmVsX2tleSxcbiAgICAgICAgICAgICAgICAgICAgfSkgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIENvbnRlbnQgKi99XG4gICAgICAgICAgICAgICAgICAgIHtwYW5lbC5jb250ZW50Lmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICBwYW5lbC5jb250ZW50Lm1hcCgoY29udGVudDogYW55LCBjb250ZW50X2tleTogbnVtYmVyKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGVudCB0eXBlIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQudHlwZSA9PT0gXCJ0ZXh0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBjb250ZW50LmNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29udGVudF9rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIF0pfVxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1wYWRkaW5nLTE2IHczLWxpZ2h0LWdyZXlcIj5cbiAgICAgICAgICA8aDQgLz5cbiAgICAgICAgICA8cCAvPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVxdWVzdHNBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvcmVxdWVzdHNcIjtcbmltcG9ydCB7IFByZWxvYWRlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3ByZWxvYWRlclwiO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4vTGF5b3V0XCI7XG5pbXBvcnQgeyBFZGl0QmxvY2sgfSBmcm9tIFwiLi9FZGl0QmxvY2tcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNYWluUGFnZVByb3BzIHtcbiAgY29tbW9uRGF0YTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1haW5QYWdlU3RhdGUge1xuICBjdXJyZW50U2NyZWVuOiBzdHJpbmc7XG4gIGJsb2Nrc1BhZ2U6IGFueTtcbiAgY3VycmVudEJsb2NrOiBhbnk7XG4gIGN1cnJlbnRQYW5lbDogYW55O1xufVxuXG5jb25zdCBSID0gbmV3IFJlcXVlc3RzQWN0aW9ucygpO1xuY29uc3QgUFJMID0gbmV3IFByZWxvYWRlcigpO1xuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgPyBwcm9jZXNzLmVudi5BUElfVVJMIDogXCJcIjtcblxuZXhwb3J0IGNsYXNzIE1haW5QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE1haW5QYWdlUHJvcHMsIE1haW5QYWdlU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFNjcmVlbjogdGhpcy5wcm9wcy5jb21tb25EYXRhLmN1cnJlbnRTY3JlZW4sXG4gICAgICBibG9ja3NQYWdlOiB0aGlzLnByb3BzLmNvbW1vbkRhdGEuYmxvY2tzUGFnZSxcbiAgICAgIGN1cnJlbnRCbG9jazogTmFOLFxuICAgICAgY3VycmVudFBhbmVsOiBOYU5cbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlU3RhdGUgPSAocHJvcHM6IGFueSkgPT4gdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIC4uLnByb3BzIH0pO1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzYXZlQmxvY2sgPSAoY3VycmVudFBhbmVsOiBhbnkpID0+e1xuICAgIFIucG9zdFJlcXVlc3QodGhpcy5zdGF0ZS5ibG9ja3NQYWdlLCBBUElfVVJMICsgXCIvcGFnZS9cIikudGhlbihqc29uID0+IHtcbi8vICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmN1cnJlbnRTY3JlZW4pIHtcbiAgICAgIGNhc2UgXCJlZGl0LWJsb2NrXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEVkaXRCbG9ja1xuICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgICB1cGRhdGVTdGF0ZT17dGhpcy51cGRhdGVTdGF0ZX1cbiAgICAgICAgICAgIHNhdmVCbG9jaz17dGhpcy5zYXZlQmxvY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxMYXlvdXQgey4uLnRoaXMuc3RhdGV9IHVwZGF0ZVN0YXRlPXt0aGlzLnVwZGF0ZVN0YXRlfSAvPjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVxdWVzdHNBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvcmVxdWVzdHNcIjtcbmltcG9ydCB7IFByZWxvYWRlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL3ByZWxvYWRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVQcm9wcyB7XG4gIGNvbW1vbkRhdGE6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZW51U3RhdGUge1xuICBjdXJyZW50U2NyZWVuOiBzdHJpbmc7XG59XG5cbmNvbnN0IFIgPSBuZXcgUmVxdWVzdHNBY3Rpb25zKCk7XG5jb25zdCBQUkwgPSBuZXcgUHJlbG9hZGVyKCk7XG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCA/IHByb2Nlc3MuZW52LkFQSV9VUkwgOiBcIlwiO1xuXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxNZW51UHJvcHMsIE1lbnVTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50U2NyZWVuOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlU3RhdGUgPSAocHJvcHM6IGFueSkgPT4gdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIC4uLnByb3BzIH0pO1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPVwidzMtc2lkZWJhciB3My1jb2xsYXBzZSB3My13aGl0ZSB3My1hbmltYXRlLWxlZnRcIlxuICAgICAgICBpZD1cIm15U2lkZWJhclwiXG4gICAgICA+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbnRhaW5lciB3My1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWNvbCBzNFwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvdzNpbWFnZXMvYXZhdGFyMi5wbmdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3My1jaXJjbGUgdzMtbWFyZ2luLXJpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3My1jb2wgczggdzMtYmFyXCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAg0J/RgNC40LLQtdGC0YHRgtCy0YPRjixcbiAgICAgICAgICAgICAgPHN0cm9uZz57LyogeyAgQFRPRE8gVXNlciBOYW1lIH0gICAqL308L3N0cm9uZz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGVcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlclwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInczLWJhci1pdGVtIHczLWJ1dHRvblwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGg1PkRhc2hib2FyZDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWJhci1ibG9ja1wiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3My1iYXItaXRlbSB3My1idXR0b24gdzMtcGFkZGluZy0xNiB3My1oaWRlLWxhcmdlIHczLWRhcmstZ3JleSB3My1ob3Zlci1ibGFja1wiXG4gICAgICAgICAgICAvLyAgb25jbGljaz1cInczX2Nsb3NlKClcIlxuICAgICAgICAgICAgLy8gIHRpdGxlPVwiY2xvc2UgbWVudVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcmVtb3ZlIGZhLWZ3XCIgLz5cbiAgICAgICAgICAgINCX0LDQutGA0YvRgtGMINC80LXQvdGOXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uIHczLXBhZGRpbmcgdzMtYmx1ZVwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlcnMgZmEtZndcIiAvPlxuICAgICAgICAgICAg0JPQu9Cw0LLQvdCw0Y8g0YHRgtGA0LDQvdC40YbQsFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUHJlbG9hZGVyIHtcbiAgaGlkZVByZWxvYWRlcigpIHtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVsb2FkZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9XG5cbiAgc2hvd1ByZWxvYWRlcigpIHtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVsb2FkZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFJlcXVlc3RzQWN0aW9ucyB7XG4gIGdldENvb2NraWUoKSB7XG4gICAgbGV0IHN0ciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xuICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VyID0gc3RyW2ldLnNwbGl0KFwiPVwiKTtcbiAgICAgIHJlc3VsdFtjdXJbMF1dID0gY3VyWzFdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdG9RdWVyeVN0cmluZyA9IChwYXJhbXM6IGFueSkgPT4ge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgXCI/XCIgK1xuICAgICAgT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgICAubWFwKFxuICAgICAgICAgIGtleSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pfWBcbiAgICAgICAgKVxuICAgICAgICAuam9pbihcIiZcIilcbiAgICApO1xuICB9O1xuXG4gIHBvc3RSZXF1ZXN0KHBhcmFtczogb2JqZWN0LCB1cmw6IHN0cmluZykge1xuICAgIGxldCBwcm9wczogYW55ID0ge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICB9O1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAocHJvcHNbXCJtb2RlXCJdID0gXCJuby1jb3JzXCIpLFxuICAgICAgICAocHJvcHNbXCJoZWFkZXJzXCJdID0ge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCIsXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBwcm9wc1tcImhlYWRlcnNcIl0gPSB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCIsXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiWC1DU1JGVG9rZW5cIjogdGhpcy5nZXRDb29ja2llKCkuY3NyZnRva2VuXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmZXRjaCh1cmwsIHByb3BzKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAgIGNhc2UgNDAxOiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJsb2dvdXQvXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIDIwMDoge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRSZXF1ZXN0KHBhcmFtczogb2JqZWN0LCB1cmw6IHN0cmluZykge1xuICAgIGZldGNoKHVybCArIHRoaXMudG9RdWVyeVN0cmluZyhwYXJhbXMpLCB7XG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=