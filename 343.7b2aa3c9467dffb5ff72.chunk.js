(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[343],{

/***/ "./node_modules/css-loader/index.js??ref--8-2!./node_modules/postcss-loader/lib/index.js??postcss!./src/containers/PageContainer/PageContainer.css":
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(\"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \".PageContainer__wrapper___2OTP4{overflow:auto;display:flex;flex-direction:column;height:100%}.PageContainer__content___1GUjP{overflow:auto;flex:1 1 0%}.PageContainer__fullWidth___2IFc_{width:100%}\", \"\", {\"version\":3,\"sources\":[\"/Users/vinojv/Github/rapid-prototype/src/containers/PageContainer/PageContainer.css\"],\"names\":[],\"mappings\":\"AAAA,gCACE,cAAe,AACf,aAAc,AACd,sBAAuB,AACvB,WAAa,CACd,AAED,gCACE,cAAe,AACf,WAAa,CACd,AAED,kCACE,UAAY,CACb\",\"file\":\"PageContainer.css\",\"sourcesContent\":[\".wrapper {\\n  overflow: auto;\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n}\\n\\n.content {\\n  overflow: auto;\\n  flex: 1 1 0%;\\n}\\n\\n.fullWidth {\\n  width: 100%;\\n}\"],\"sourceRoot\":\"\"}]);\n\n// exports\nexports.locals = {\n\t\"wrapper\": \"PageContainer__wrapper___2OTP4\",\n\t\"content\": \"PageContainer__content___1GUjP\",\n\t\"fullWidth\": \"PageContainer__fullWidth___2IFc_\"\n};\n\n//# sourceURL=webpack:///./src/containers/PageContainer/PageContainer.css?./node_modules/css-loader??ref--8-2!./node_modules/postcss-loader/lib??postcss");

/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--8-2!./node_modules/postcss-loader/lib/index.js??postcss!./src/containers/SidePane/SidePane.css":
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(\"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \".SidePane__navPane___3tDSa{width:200px}\", \"\", {\"version\":3,\"sources\":[\"/Users/vinojv/Github/rapid-prototype/src/containers/SidePane/SidePane.css\"],\"names\":[],\"mappings\":\"AAAA,2BACE,WAAa,CAGd\",\"file\":\"SidePane.css\",\"sourcesContent\":[\".navPane {\\n  width: 200px;\\n  /*background-color: #F9F9F9;*/\\n  /*border-right: 1px solid #D8D8D8;*/\\n}\"],\"sourceRoot\":\"\"}]);\n\n// exports\nexports.locals = {\n\t\"navPane\": \"SidePane__navPane___3tDSa\"\n};\n\n//# sourceURL=webpack:///./src/containers/SidePane/SidePane.css?./node_modules/css-loader??ref--8-2!./node_modules/postcss-loader/lib??postcss");

/***/ }),

/***/ "./src/App.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _defineProperty2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/defineProperty.js\");\n\nvar _defineProperty3 = _interopRequireDefault(_defineProperty2);\n\nvar _extends2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _objectWithoutProperties2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/objectWithoutProperties.js\");\n\nvar _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);\n\nvar _keys = __webpack_require__(\"./node_modules/babel-runtime/core-js/object/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nvar _getPrototypeOf = __webpack_require__(\"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _classnames = __webpack_require__(\"./node_modules/classnames/index.js\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _eva = __webpack_require__(\"../EVA Design System/build/index.js\");\n\nvar _react = __webpack_require__(\"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(\"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _Switch = __webpack_require__(\"./node_modules/react-router/es/Switch.js\");\n\nvar _Switch2 = _interopRequireDefault(_Switch);\n\nvar _App = __webpack_require__(\"./src/App.css\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _PageContainer = __webpack_require__(\"./src/containers/PageContainer/PageContainer.js\");\n\nvar _PageContainer2 = _interopRequireDefault(_PageContainer);\n\nvar _SidePane = __webpack_require__(\"./src/containers/SidePane/SidePane.js\");\n\nvar _SidePane2 = _interopRequireDefault(_SidePane);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function (_Component) {\n  (0, _inherits3.default)(App, _Component);\n\n  function App() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    (0, _classCallCheck3.default)(this, App);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.applyTheme = function () {\n      var theme = _this.props.config.theme;\n\n      var getExpColorCode = function getExpColorCode(c) {\n        return c.length === 4 ? '#' + c[1] + c[1] + c[2] + c[2] + c[3] + c[3] : c;\n      };\n      if (theme && (0, _keys2.default)(theme).length > 0) {\n        var header = theme.header,\n            body = theme.body,\n            primaryTextColorLight = theme.primaryTextColorLight,\n            primaryTextColorDark = theme.primaryTextColorDark,\n            basicColors = (0, _objectWithoutProperties3.default)(theme, ['header', 'body', 'primaryTextColorLight', 'primaryTextColorDark']);\n\n        var primaryTextColor = body === 'dark' ? primaryTextColorLight : primaryTextColorDark;\n        var headerTextColor = header === 'dark' ? primaryTextColorLight : primaryTextColorDark;\n        var expandedColorCode = getExpColorCode(primaryTextColor);\n        var headerExpandedColorCode = getExpColorCode(headerTextColor);\n        var colors = (0, _extends3.default)({}, basicColors, {\n          primaryTextColor: primaryTextColor,\n          headerTextColor: headerTextColor,\n          headerTextColorOp1: headerExpandedColorCode + '1a',\n          headerTextColorOp5: headerExpandedColorCode + '80',\n          headerTextColorOp7: headerExpandedColorCode + 'b3',\n          headerTextColorOp8: headerExpandedColorCode + 'cc',\n          headerTextColorOp9: headerExpandedColorCode + 'e6',\n          textColorOp1: expandedColorCode + '1a',\n          textColorOp5: expandedColorCode + '80',\n          textColorOp7: expandedColorCode + 'b3',\n          textColorOp8: expandedColorCode + 'cc',\n          textColorOp9: expandedColorCode + 'e6'\n        });\n        (0, _keys2.default)(colors).forEach(function (property) {\n          document.documentElement.style.setProperty('--' + property, colors[property]);\n        });\n      }\n    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);\n  }\n\n  (0, _createClass3.default)(App, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.applyTheme();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          config = _props.config,\n          routes = _props.routes;\n\n      var showSidePane = typeof config.sidePane === 'function' ? config.sidePane(this.props) : config.sidePane;\n      return _react2.default.createElement(\n        _eva.GridContainer,\n        { fluid: true },\n        _react2.default.createElement(\n          _eva.GridCol,\n          { className: _App2.default.wrapper },\n          _react2.default.createElement(\n            _PageContainer2.default,\n            {\n              navTop: config.navTop,\n              navList: config.navList,\n              showSearch: false,\n              showClientLogo: config.showClientLogo,\n              clientLogo: config.clientLogo,\n              appName: config.appName,\n              classes: config.classes,\n              className: (0, _classnames2.default)((0, _defineProperty3.default)({}, _App2.default['multi-column'], config.sidePane))\n            },\n            showSidePane && _react2.default.createElement(_SidePane2.default, { navList: config.sideBarNavList, sideBar: config.sideBar }),\n            _react2.default.createElement(\n              'div',\n              { className: _App2.default['main-content'] },\n              _react2.default.createElement(\n                _Switch2.default,\n                null,\n                routes\n              )\n            ),\n            _react2.default.createElement('div', { id: 'app-popup' }),\n            _react2.default.createElement('div', { id: 'app-sidebar' }),\n            _react2.default.createElement('div', { id: 'app-tooltip' })\n          )\n        )\n      );\n    }\n  }]);\n  return App;\n}(_react.Component);\n\nApp.defaultProps = {\n  config: { theme: {}, navList: [], sideBarNavList: [] }\n};\n\nApp.propTypes = {\n  config: _propTypes2.default.instanceOf(Object)\n};\n\nexports.default = App;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/containers/PageContainer/PageContainer.css":
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(\"./node_modules/css-loader/index.js??ref--8-2!./node_modules/postcss-loader/lib/index.js??postcss!./src/containers/PageContainer/PageContainer.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(\"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/containers/PageContainer/PageContainer.css?");

/***/ }),

/***/ "./src/containers/PageContainer/PageContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _defineProperty2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/defineProperty.js\");\n\nvar _defineProperty3 = _interopRequireDefault(_defineProperty2);\n\nvar _getPrototypeOf = __webpack_require__(\"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _classnames = __webpack_require__(\"./node_modules/classnames/index.js\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _eva = __webpack_require__(\"../EVA Design System/build/index.js\");\n\nvar _react = __webpack_require__(\"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ = __webpack_require__(\"./src/containers/index.js\");\n\nvar _PageContainer = __webpack_require__(\"./src/containers/PageContainer/PageContainer.css\");\n\nvar _PageContainer2 = _interopRequireDefault(_PageContainer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PageContainer = function (_Component) {\n  (0, _inherits3.default)(PageContainer, _Component);\n\n  function PageContainer(props) {\n    (0, _classCallCheck3.default)(this, PageContainer);\n    return (0, _possibleConstructorReturn3.default)(this, (PageContainer.__proto__ || (0, _getPrototypeOf2.default)(PageContainer)).call(this, props));\n  }\n\n  (0, _createClass3.default)(PageContainer, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          showSearch = _props.showSearch,\n          showClientLogo = _props.showClientLogo,\n          children = _props.children,\n          navTop = _props.navTop,\n          navList = _props.navList,\n          appName = _props.appName,\n          clientLogo = _props.clientLogo,\n          classes = _props.classes,\n          className = _props.className;\n\n      return _react2.default.createElement(\n        _eva.GridCol,\n        { className: (0, _classnames2.default)(_PageContainer2.default.wrapper, (0, _defineProperty3.default)({}, _PageContainer2.default.fullWidth, navTop)) },\n        _react2.default.createElement(\n          _eva.GridRow,\n          null,\n          _react2.default.createElement(_.Header, {\n            appName: appName,\n            showNav: navTop,\n            navList: navList,\n            showSearch: showSearch,\n            showClientLogo: showClientLogo,\n            clientLogo: clientLogo,\n            classes: classes\n          })\n        ),\n        _react2.default.createElement(\n          _eva.GridCol,\n          { className: (0, _classnames2.default)(_PageContainer2.default.content, className) },\n          children\n        )\n      );\n    }\n  }]);\n  return PageContainer;\n}(_react.Component);\n\nexports.default = PageContainer;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./src/containers/PageContainer/PageContainer.js?");

/***/ }),

/***/ "./src/containers/SidePane/SidePane.css":
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(\"./node_modules/css-loader/index.js??ref--8-2!./node_modules/postcss-loader/lib/index.js??postcss!./src/containers/SidePane/SidePane.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(\"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/containers/SidePane/SidePane.css?");

/***/ }),

/***/ "./src/containers/SidePane/SidePane.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _getPrototypeOf = __webpack_require__(\"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(\"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _class, _temp;\n\nvar _eva = __webpack_require__(\"../EVA Design System/build/index.js\");\n\nvar _propTypes = __webpack_require__(\"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(\"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(\"./node_modules/react-redux/es/index.js\");\n\nvar _dataAccessor = __webpack_require__(\"./src/Util/interactionEngine/dataAccessor.js\");\n\nvar _dataAccessor2 = _interopRequireDefault(_dataAccessor);\n\nvar _proxy = __webpack_require__(\"./src/Util/proxy.js\");\n\nvar _SidePane = __webpack_require__(\"./src/containers/SidePane/SidePane.css\");\n\nvar _SidePane2 = _interopRequireDefault(_SidePane);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar navItemPropType = {\n  title: _propTypes2.default.string.isRequired,\n  link: _propTypes2.default.string.isRequired\n};\n\nvar SidePane = (_temp = _class = function (_Component) {\n  (0, _inherits3.default)(SidePane, _Component);\n\n  function SidePane(props) {\n    (0, _classCallCheck3.default)(this, SidePane);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (SidePane.__proto__ || (0, _getPrototypeOf2.default)(SidePane)).call(this, props));\n\n    _this.stateSetter = _this.stateSetter.bind(_this);\n    _this.DataSetter = _this.DataSetter.bind(_this);\n    _this.DataAccessor = _this.DataAccessor.bind(_this);\n    _this.Helper2 = _this.Helper2.bind(_this);\n    _this.Helper = _this.Helper2();\n    return _this;\n  }\n\n  (0, _createClass3.default)(SidePane, [{\n    key: 'getChildContext',\n    value: function getChildContext() {\n      return {\n        store: this.props.store,\n        dispatch: this.props.dispatch,\n        ctx: this,\n        stateSetter: this.stateSetter,\n        DataSetter: this.DataSetter,\n        DataAccessor: this.DataAccessor,\n        Helper: this.Helper\n      };\n    }\n  }, {\n    key: 'stateSetter',\n    value: function stateSetter(obj, cb) {\n      if (!obj) return;\n      this.setState(obj, cb);\n    }\n  }, {\n    key: 'DataSetter',\n    value: function DataSetter(model, value) {\n      return (0, _dataAccessor.dataSetter)(this, this.props.store, model, value);\n    }\n  }, {\n    key: 'DataAccessor',\n    value: function DataAccessor(model, defaultValue, event) {\n      return (0, _dataAccessor2.default)(this, this.props.store, model, event, defaultValue);\n    }\n  }, {\n    key: 'Helper2',\n    value: function Helper2() {\n      return (0, _proxy.InteractionProxyMethods)(this, this.props);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          navList = _props.navList,\n          sideBar = _props.sideBar,\n          location = _props.location;\n      //    const SideBar = sideBar();\n\n      console.log('SIDEBAR', sideBar, this.Helper);\n      return _react2.default.createElement(\n        _eva.GridCol,\n        { className: _SidePane2.default.navPane },\n        sideBar((0, _extends3.default)({}, this.props, {\n          navList: navList,\n          onClickItem: function onClickItem(link) {\n            return _this2.Helper.Navigate(link)();\n          },\n          activeLink: location.pathname\n        }))\n      );\n    }\n  }]);\n  return SidePane;\n}(_react.Component), _class.childContextTypes = {\n  store: _propTypes2.default.object,\n  dispatch: _propTypes2.default.func,\n  stateSetter: _propTypes2.default.func,\n  ctx: _propTypes2.default.any,\n  DataSetter: _propTypes2.default.func,\n  DataAccessor: _propTypes2.default.func,\n  Helper: _propTypes2.default.any\n}, _class.defaultProps = {\n  navList: []\n}, _class.propTypes = {\n  navList: _propTypes2.default.array\n}, _temp);\n\n\nvar mapStateToProps = function mapStateToProps(store, props) {\n  return (0, _extends3.default)({}, store.global, props, {\n    store: store.global,\n    config: store.global.config,\n    location: store.routing.location\n  });\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(SidePane);\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./src/containers/SidePane/SidePane.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIzNDMuN2IyYWEzYzk0NjdkZmZiNWZmNzIuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=