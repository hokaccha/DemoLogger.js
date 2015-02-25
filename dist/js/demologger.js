(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.DemoLogger = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Elem = _interopRequire(require("./Elem"));

var Frame = _interopRequire(require("./Frame"));

var Logger = _interopRequire(require("./Logger"));

var Func = _interopRequire(require("./Func"));

var Btn = _interopRequire(require("./Btn"));

var DemoLogger = (function () {
  function DemoLogger() {
    var config = arguments[0] === undefined ? {} : arguments[0];
    var opt = arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, DemoLogger);

    this.config = config;
    this.opt = opt;
    this._initialize();
  }

  _prototypeProperties(DemoLogger, null, {
    _initialize: {
      value: function _initialize(opt) {
        this._setElement();
        this._setFunc(this.config);
        if (!this.opt.mount) {
          this.mount("body");
        }
      },
      writable: true,
      configurable: true
    },
    _setElement: {
      value: function _setElement() {
        this.frame = new Frame();
        this.fns = new Elem({ el: "funcs" });
        this.logger = new Logger();
        this.frame.add([this.fns, this.logger]);
      },
      writable: true,
      configurable: true
    },
    mount: {
      value: function mount(selector) {
        document.querySelector(selector).appendChild(this.frame.el);
      },
      writable: true,
      configurable: true
    },
    set: {
      value: function set(config) {
        this._setFunc(config);
      },
      writable: true,
      configurable: true
    },
    _setFunc: {
      value: function _setFunc(config) {
        for (var fn in config) {
          if (config.hasOwnProperty(fn)) {
            this.fns.add([new Func({
              text: fn,
              fn: config[fn]
            })]);
          }
        }
      },
      writable: true,
      configurable: true
    }
  });

  return DemoLogger;
})();

module.exports = DemoLogger;

},{"./Btn":2,"./Elem":6,"./Frame":7,"./Func":8,"./Logger":12}],2:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Elem = _interopRequire(require("./Elem"));

var Btn = (function (Elem) {
  function Btn() {
    var opt = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Btn);

    opt.el = "button";
    opt.text = opt.text || "run";
    opt.style = {
      textAlign: "center",
      color: "#fff",
      display: "inline-block",
      // backgroundColor: '#C7243A',
      backgroundColor: "rgb(51, 51, 51)",
      border: "none",
      borderRadius: "1px",
      padding: "0 10px",
      lineHeight: "26px",
      fontSize: "14px",
      webkitAppearance: "none",
      boxShadow: "inset 0 -1px 0 0 rgba(255,255,255,.2)",
      margin: "0",
      cursor: "pointer"
    };

    _get(Object.getPrototypeOf(Btn.prototype), "constructor", this).call(this, opt);
  }

  _inherits(Btn, Elem);

  return Btn;
})(Elem);

module.exports = Btn;

},{"./Elem":6}],3:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Elem = _interopRequire(require("./Elem"));

var CodeCloseBtn = _interopRequire(require("./CodeCloseBtn"));

var Code = (function (Elem) {
  function Code() {
    var opt = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Code);

    opt.el = "code";
    opt.style = {
      display: "block",
      padding: "5px",
      backgroundColor: "rgb(226, 241, 224)",
      color: "rgb(30, 30, 30)",
      margin: "0",
      whiteSpace: "pre",
      overflowX: "scroll",
      fontSize: "12px",
      fontFamily: "monospace",
      letterSpacing: "0.1em",
      position: "relative"
    };
    _get(Object.getPrototypeOf(Code.prototype), "constructor", this).call(this, opt);
    this._initElement();
  }

  _inherits(Code, Elem);

  _prototypeProperties(Code, null, {
    _initElement: {
      value: function _initElement() {
        this.close = new CodeCloseBtn({
          fn: this.hide.bind(this)
        });
        this.add([this.close]);
      },
      writable: true,
      configurable: true
    },
    show: {
      value: function show() {
        this.el.style.display = "block";
      },
      writable: true,
      configurable: true
    },
    hide: {
      value: function hide() {
        this.el.style.display = "none";
      },
      writable: true,
      configurable: true
    },
    isShow: {
      value: function isShow() {
        return this.el.style.display == "block";
      },
      writable: true,
      configurable: true
    },
    toggle: {
      value: function toggle() {
        this.isShow() ? this.hide() : this.show();
      },
      writable: true,
      configurable: true
    }
  });

  return Code;
})(Elem);

module.exports = Code;

},{"./CodeCloseBtn":5,"./Elem":6}],4:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Btn = _interopRequire(require("./Btn"));

var CodeBtn = (function (Btn) {
  function CodeBtn() {
    var opt = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, CodeBtn);

    opt.el = "codebutton";
    opt.text = "code";
    _get(Object.getPrototypeOf(CodeBtn.prototype), "constructor", this).call(this, opt);
    this.style = {
      backgroundColor: "#23AC0E"
    };
    this.applyStyle();
  }

  _inherits(CodeBtn, Btn);

  return CodeBtn;
})(Btn);

module.exports = CodeBtn;

},{"./Btn":2}],5:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Btn = _interopRequire(require("./Btn"));

var CodeCloseBtn = (function (Btn) {
  function CodeCloseBtn() {
    var opt = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, CodeCloseBtn);

    opt.el = "codeclosebutton";
    opt.text = "close";

    _get(Object.getPrototypeOf(CodeCloseBtn.prototype), "constructor", this).call(this, opt);
    this.fn = opt.fn;

    this.style = {
      backgroundColor: "rgb(17, 108, 0)",
      position: "absolute",
      right: "0px",
      top: "0px",
      fontSize: "10px",
      opacity: "0.5",
      padding: "0 5px",
      lineHeight: "20px"
    };
    this.applyStyle();
    this._addEvent();
  }

  _inherits(CodeCloseBtn, Btn);

  _prototypeProperties(CodeCloseBtn, null, {
    _addEvent: {
      value: function _addEvent() {
        var _this = this;

        this.el.addEventListener("click", function () {
          _this.fn();
        });
      },
      writable: true,
      configurable: true
    }
  });

  return CodeCloseBtn;
})(Btn);

module.exports = CodeCloseBtn;

},{"./Btn":2}],6:[function(require,module,exports){
var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var PRE = "dl-";

var Elem = (function () {
  function Elem() {
    var opt = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Elem);

    opt.el = opt.el ? "" + PRE + "" + opt.el : "" + PRE + "div";
    this.opt = opt;
    this.name = opt.name || "";
    this.style = opt.style || {};
    this.events = opt.events || {};
    this._initialize();
  }

  _prototypeProperties(Elem, null, {
    _initialize: {
      value: function _initialize() {
        this._setElement();
        this._eventify();
        this.applyStyle();
      },
      writable: true,
      configurable: true
    },
    _setElement: {
      value: function _setElement() {
        this.el = document.createElement(this.opt.el);
        this.el.textContent = this.opt.text || "";
        this.el.style.display = "block";
      },
      writable: true,
      configurable: true
    },
    mount: {
      value: function mount(selector) {
        document.querySelector(selector).appendChild(this.el);
      },
      writable: true,
      configurable: true
    },
    applyStyle: {
      value: function applyStyle() {
        for (var key in this.style) {
          if (this.style.hasOwnProperty(key)) {
            this.el.style[key] = this.style[key];
          }
        }
      },
      writable: true,
      configurable: true
    },
    _eventify: {
      value: function _eventify() {
        for (var eventName in this.events) {
          if (this.events.hasOwnProperty(eventName)) {
            this.addEvent(eventName, this.events[eventName]);
          }
        }
      },
      writable: true,
      configurable: true
    },
    addEvent: {
      value: function addEvent(eventName, cb) {
        var _this = this;

        this.el.addEventListener(eventName, function () {
          console.log("> run " + _this.name);
          try {
            cb();
          } catch (err) {
            console.log(err.message);
          }
        }, false);
      },
      writable: true,
      configurable: true
    },
    add: {
      value: function add(els) {
        if (els.length) {
          for (var i = 0, leng = els.length; i < leng; i++) {
            this.el.appendChild(els[i].el);
          }
        } else {
          this.el.appendChild(els.el);
        }
      },
      writable: true,
      configurable: true
    }
  });

  return Elem;
})();

module.exports = Elem;

},{}],7:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Elem = _interopRequire(require("./Elem"));

var Frame = (function (Elem) {
  function Frame() {
    var opt = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Frame);

    opt.el = "frame";
    opt.style = {
      backgroundColor: "#f9faf9",
      padding: "5px",
      borderRadius: "1px",
      boxShadow: "inset 1px 1px 0 rgba(0,0,0,.2)",
      marginTop: "10px"
    };

    _get(Object.getPrototypeOf(Frame.prototype), "constructor", this).call(this, opt);
  }

  _inherits(Frame, Elem);

  return Frame;
})(Elem);

module.exports = Frame;

},{"./Elem":6}],8:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Elem = _interopRequire(require("./Elem"));

var CodeBtn = _interopRequire(require("./CodeBtn"));

var Code = _interopRequire(require("./Code"));

var Btn = _interopRequire(require("./Btn"));

var FuncLabel = _interopRequire(require("./FuncLabel"));

var Func = (function (Elem) {
  function Func() {
    var opt = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Func);

    this.fn = opt.fn;
    this.text = opt.text;
    opt.el = "func";
    opt.text = "";
    opt.style = {
      boxShadow: "none",
      borderBottom: "1px dashed rgba(0,0,0,.2)",
      padding: "5px"
    };
    _get(Object.getPrototypeOf(Func.prototype), "constructor", this).call(this, opt);
    this._initElement();
  }

  _inherits(Func, Elem);

  _prototypeProperties(Func, null, {
    _initElement: {
      value: function _initElement() {
        var _this = this;

        this.btn = new CodeBtn();
        this.code = new Code({
          text: this._toString()
        });

        this.add([new FuncLabel({
          text: this.text
        }), new Btn({
          name: this.text,
          events: {
            click: this.fn
          }
        }), this.btn, this.code]);
        this.btn.el.addEventListener("click", (function () {
          _this.code.show();
        }).bind(this));
      },
      writable: true,
      configurable: true
    },
    _toString: {
      value: function _toString() {
        var codestring = this.fn.toString().split("\n");
        codestring.splice(-1, 1);
        codestring.splice(0, 1);
        var firstIndent = codestring[0].match(/^\s*/)[0];
        var reg = new RegExp("^" + firstIndent);
        for (var i = 0, leng = codestring.length; i < leng; i++) {
          codestring[0] = codestring[0].replace(reg, "");
        }

        return codestring.join("\n");
      },
      writable: true,
      configurable: true
    }
  });

  return Func;
})(Elem);

module.exports = Func;

},{"./Btn":2,"./Code":3,"./CodeBtn":4,"./Elem":6,"./FuncLabel":9}],9:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Label = _interopRequire(require("./Label"));

var FuncLabel = (function (Label) {
  function FuncLabel() {
    var opt = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, FuncLabel);

    _get(Object.getPrototypeOf(FuncLabel.prototype), "constructor", this).call(this, opt);
    this.style = {
      margin: "0 0 5px",
      fontSize: "12px",
      color: "rgb(51, 51, 51)"
    };
    this.applyStyle();
  }

  _inherits(FuncLabel, Label);

  return FuncLabel;
})(Label);

module.exports = FuncLabel;

},{"./Label":10}],10:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Elem = _interopRequire(require("./Elem"));

var Label = (function (Elem) {
  function Label() {
    var opt = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Label);

    opt.text = opt.text || "label";
    opt.el = "label";
    opt.style = {
      fontSize: "12px",
      color: "#9f9f9f",
      textShadow: "-1px -1px rgba(255,255,255, .2)",
      margin: "8px 0 5px"
    };

    _get(Object.getPrototypeOf(Label.prototype), "constructor", this).call(this, opt);
  }

  _inherits(Label, Elem);

  return Label;
})(Elem);

module.exports = Label;

},{"./Elem":6}],11:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _replacelog = require("./replacelog");

var replacelog = _replacelog.replacelog;
var replacewarn = _replacelog.replacewarn;
var replaceerror = _replacelog.replaceerror;

var Elem = _interopRequire(require("./Elem"));

var Log = (function (Elem) {
  function Log() {
    var opt = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Log);

    opt.el = "log";
    opt.style = {
      color: "#15df30",
      padding: "5px 7px",
      backgroundColor: "#333",
      lineHeight: "1.5",
      fontSize: "12px",
      fontFamily: "\"Ubuntu Mono\", sans-serif",
      border: "1px solid #000",
      borderRadius: "2px",
      margin: "0",
      minHeight: "19px",
      whiteSpace: "pre",
      letterSpacing: "0.1em"
    };

    _get(Object.getPrototypeOf(Log.prototype), "constructor", this).call(this, opt);
    replacelog(this.el);
    replacewarn(this.el);
    replaceerror(this.el);
  }

  _inherits(Log, Elem);

  return Log;
})(Elem);

module.exports = Log;

},{"./Elem":6,"./replacelog":13}],12:[function(require,module,exports){
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Elem = _interopRequire(require("./Elem"));

var Label = _interopRequire(require("./Label"));

var Log = _interopRequire(require("./Log"));

var Logger = (function (Elem) {
  function Logger() {
    var opt = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Logger);

    opt.el = "logger";
    opt.style = {
      padding: "5px"
    };

    _get(Object.getPrototypeOf(Logger.prototype), "constructor", this).call(this, opt);
    this._initElement();
  }

  _inherits(Logger, Elem);

  _prototypeProperties(Logger, null, {
    _initElement: {
      value: function _initElement() {
        this.label = new Label({ text: "console.log" });
        this.log = new Log();
        this.add([this.label, new Log()]);
      },
      writable: true,
      configurable: true
    }
  });

  return Logger;
})(Elem);

module.exports = Logger;

},{"./Elem":6,"./Label":10,"./Log":11}],13:[function(require,module,exports){
exports.replacelog = replacelog;
exports.replacewarn = replacewarn;
exports.replaceerror = replaceerror;
var PRE = "dl-";
function replacelog(el) {
  var _log = console.log;
  console.log = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _log.apply(console, args);
    for (var i = 0, leng = args.length; i < leng; i++) {
      if (typeof args[i] == "object") {
        el.appendChild(document.createTextNode(JSON.stringify(args[i], null, 2) + "\n"));
      } else if (typeof args[i] === "undefined") {
        el.appendChild(document.createTextNode("undefined \n"));
      } else {
        el.appendChild(document.createTextNode(args[i] + "\n"));
      }
    }
  };
};

function replacewarn(el) {
  var _warn = console.warn;
  console.warn = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _warn.apply(console, args);
    var wrap = document.createElement("" + PRE + "warn");
    wrap.style.color = "rgb(245, 228, 38)";

    for (var i = 0, leng = args.length; i < leng; i++) {
      if (typeof args[i] == "object") {
        wrap.appendChild(document.createTextNode(JSON.stringify(args[i], null, 2) + "\n"));
      } else if (typeof args[i] === "undefined") {
        wrap.appendChild(document.createTextNode("undefined \n"));
      } else {
        wrap.appendChild(document.createTextNode(args[i] + "\n"));
      }
    }

    el.appendChild(wrap);
  };
};

function replaceerror(el) {
  var _error = console.error;
  console.error = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _error.apply(console, args);
    var wrap = document.createElement("" + PRE + "warn");
    wrap.style.color = "rgb(255, 52, 52)";

    for (var i = 0, leng = args.length; i < leng; i++) {
      if (typeof args[i] == "object") {
        wrap.appendChild(document.createTextNode(JSON.stringify(args[i], null, 2) + "\n"));
      } else if (typeof args[i] === "undefined") {
        wrap.appendChild(document.createTextNode("undefined \n"));
      } else {
        wrap.appendChild(document.createTextNode(args[i] + "\n"));
      }
    }

    el.appendChild(wrap);
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaG9rYW11cmEvdG1wL0RlbW9Mb2dnZXIuanMvc3JjL2pzL0RlbW9Mb2dnZXIuZXM2LmpzIiwiL1VzZXJzL2hva2FtdXJhL3RtcC9EZW1vTG9nZ2VyLmpzL3NyYy9qcy9CdG4uZXM2LmpzIiwiL1VzZXJzL2hva2FtdXJhL3RtcC9EZW1vTG9nZ2VyLmpzL3NyYy9qcy9Db2RlLmVzNi5qcyIsIi9Vc2Vycy9ob2thbXVyYS90bXAvRGVtb0xvZ2dlci5qcy9zcmMvanMvQ29kZUJ0bi5lczYuanMiLCIvVXNlcnMvaG9rYW11cmEvdG1wL0RlbW9Mb2dnZXIuanMvc3JjL2pzL0NvZGVDbG9zZUJ0bi5lczYuanMiLCIvVXNlcnMvaG9rYW11cmEvdG1wL0RlbW9Mb2dnZXIuanMvc3JjL2pzL0VsZW0uZXM2LmpzIiwiL1VzZXJzL2hva2FtdXJhL3RtcC9EZW1vTG9nZ2VyLmpzL3NyYy9qcy9GcmFtZS5lczYuanMiLCIvVXNlcnMvaG9rYW11cmEvdG1wL0RlbW9Mb2dnZXIuanMvc3JjL2pzL0Z1bmMuZXM2LmpzIiwiL1VzZXJzL2hva2FtdXJhL3RtcC9EZW1vTG9nZ2VyLmpzL3NyYy9qcy9GdW5jTGFiZWwuZXM2LmpzIiwiL1VzZXJzL2hva2FtdXJhL3RtcC9EZW1vTG9nZ2VyLmpzL3NyYy9qcy9MYWJlbC5lczYuanMiLCIvVXNlcnMvaG9rYW11cmEvdG1wL0RlbW9Mb2dnZXIuanMvc3JjL2pzL0xvZy5lczYuanMiLCIvVXNlcnMvaG9rYW11cmEvdG1wL0RlbW9Mb2dnZXIuanMvc3JjL2pzL0xvZ2dlci5lczYuanMiLCIvVXNlcnMvaG9rYW11cmEvdG1wL0RlbW9Mb2dnZXIuanMvc3JjL2pzL3JlcGxhY2Vsb2cuZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDQU8sSUFBSSwyQkFBTSxRQUFROztJQUNsQixLQUFL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SSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO09BQ3BGLE1BQ0ksSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUU7QUFDdkMsWUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7T0FDM0QsTUFDSTtBQUNILFlBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztPQUMzRDtLQUNGOztBQUVELE1BQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDdEIsQ0FBQTtDQUNGLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEVsZW0gZnJvbSAnLi9FbGVtJztcbmltcG9ydCBGcmFtZSBmcm9tICcuL0ZyYW1lJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi9Mb2dnZXInO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi9GdW5jJztcbmltcG9ydCBCdG4gZnJvbSAnLi9CdG4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZW1vTG9nZ2VyIHtcbiAgY29uc3RydWN0b3IoY29uZmlnID0ge30sIG9wdCA9IHt9KSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5vcHQgPSBvcHQ7XG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICB9XG4gIF9pbml0aWFsaXplKG9wdCkge1xuICAgIHRoaXMuX3NldEVsZW1lbnQoKTtcbiAgICB0aGlzLl9zZXRGdW5jKHRoaXMuY29uZmlnKTtcbiAgICBpZiAoIXRoaXMub3B0Lm1vdW50KSB7XG4gICAgICB0aGlzLm1vdW50KCdib2R5Jyk7XG4gICAgfVxuICB9XG4gIF9zZXRFbGVtZW50KCkge1xuICAgIHRoaXMuZnJhbWUgPSBuZXcgRnJhbWUoKTtcbiAgICB0aGlzLmZucyA9IG5ldyBFbGVtKHtlbDogJ2Z1bmNzJ30pO1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcigpO1xuICAgIHRoaXMuZnJhbWUuYWRkKFt0aGlzLmZucywgdGhpcy5sb2dnZXJdKTtcbiAgfVxuICBtb3VudChzZWxlY3Rvcikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmFwcGVuZENoaWxkKHRoaXMuZnJhbWUuZWwpO1xuICB9XG4gIHNldChjb25maWcpIHtcbiAgICB0aGlzLl9zZXRGdW5jKGNvbmZpZyk7XG4gIH1cbiAgX3NldEZ1bmMoY29uZmlnKSB7XG4gICAgZm9yKHZhciBmbiBpbiBjb25maWcpIHtcbiAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoZm4pKSB7XG4gICAgICAgIHRoaXMuZm5zLmFkZChbXG4gICAgICAgICAgbmV3IEZ1bmMoe1xuICAgICAgICAgICAgdGV4dDogZm4sXG4gICAgICAgICAgICBmbjogY29uZmlnW2ZuXVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEVsZW0gZnJvbSAnLi9FbGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnRuIGV4dGVuZHMgRWxlbSB7XG4gIGNvbnN0cnVjdG9yKG9wdCA9IHt9KSB7XG4gICAgb3B0LmVsID0gJ2J1dHRvbic7XG4gICAgb3B0LnRleHQgPSBvcHQudGV4dCB8fCAncnVuJztcbiAgICBvcHQuc3R5bGUgPSB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAnI0M3MjQzQScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTEsIDUxLCA1MSknLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxcHgnLFxuICAgICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjZweCcsXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgd2Via2l0QXBwZWFyYW5jZTogJ25vbmUnLFxuICAgICAgYm94U2hhZG93OiAnaW5zZXQgMCAtMXB4IDAgMCByZ2JhKDI1NSwyNTUsMjU1LC4yKScsXG4gICAgICBtYXJnaW46ICcwJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgfTtcbiAgICBcbiAgICBzdXBlcihvcHQpO1xuICB9XG59XG4iLCJpbXBvcnQgRWxlbSBmcm9tICcuL0VsZW0nO1xuaW1wb3J0IENvZGVDbG9zZUJ0biBmcm9tICcuL0NvZGVDbG9zZUJ0bic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGUgZXh0ZW5kcyBFbGVtIHtcbiAgY29uc3RydWN0b3Iob3B0ID0ge30pIHtcbiAgICBvcHQuZWwgPSAnY29kZSc7XG4gICAgb3B0LnN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHBhZGRpbmc6ICc1cHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIyNiwgMjQxLCAyMjQpJyxcbiAgICAgIGNvbG9yOiAncmdiKDMwLCAzMCwgMzApJyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgd2hpdGVTcGFjZTogJ3ByZScsXG4gICAgICBvdmVyZmxvd1g6ICdzY3JvbGwnLFxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuICAgICAgbGV0dGVyU3BhY2luZzogJzAuMWVtJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfVxuICAgIHN1cGVyKG9wdCk7XG4gICAgdGhpcy5faW5pdEVsZW1lbnQoKTtcbiAgfVxuICBfaW5pdEVsZW1lbnQoKSB7XG4gICAgdGhpcy5jbG9zZSA9IG5ldyBDb2RlQ2xvc2VCdG4oe1xuICAgICAgZm46IHRoaXMuaGlkZS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gICAgdGhpcy5hZGQoW3RoaXMuY2xvc2VdKTtcbiAgfVxuICBzaG93KCkge1xuICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgaXNTaG93KCkge1xuICAgIHJldHVybiB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPT0gJ2Jsb2NrJztcbiAgfVxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5pc1Nob3coKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XG4gIH1cbn1cbiIsImltcG9ydCBCdG4gZnJvbSAnLi9CdG4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlQnRuIGV4dGVuZHMgQnRuIHtcbiAgY29uc3RydWN0b3Iob3B0ID0ge30pIHtcbiAgICBvcHQuZWwgPSAnY29kZWJ1dHRvbic7XG4gICAgb3B0LnRleHQgPSAnY29kZSc7XG4gICAgc3VwZXIob3B0KTtcbiAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIzQUMwRSdcbiAgICB9O1xuICAgIHRoaXMuYXBwbHlTdHlsZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgQnRuIGZyb20gJy4vQnRuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZUNsb3NlQnRuIGV4dGVuZHMgQnRuIHtcbiAgY29uc3RydWN0b3Iob3B0ID0ge30pIHtcbiAgICBvcHQuZWwgPSAnY29kZWNsb3NlYnV0dG9uJztcbiAgICBvcHQudGV4dCA9ICdjbG9zZSc7XG4gICAgXG4gICAgc3VwZXIob3B0KTtcbiAgICB0aGlzLmZuID0gb3B0LmZuO1xuICAgIFxuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTcsIDEwOCwgMCknLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogJzBweCcsXG4gICAgICB0b3A6ICcwcHgnLFxuICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgIG9wYWNpdHk6ICcwLjUnLFxuICAgICAgcGFkZGluZzogJzAgNXB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcyMHB4J1xuICAgIH07XG4gICAgdGhpcy5hcHBseVN0eWxlKCk7XG4gICAgdGhpcy5fYWRkRXZlbnQoKTtcbiAgfVxuICBfYWRkRXZlbnQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgdGhpcy5mbigpO1xuICAgIH0pXG4gIH1cbn1cbiIsInZhciBQUkUgPSAnZGwtJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW0ge1xuICBjb25zdHJ1Y3RvcihvcHQgPSB7fSkge1xuICAgIG9wdC5lbCA9IG9wdC5lbCA/IGAke1BSRX0ke29wdC5lbH1gIDogYCR7UFJFfWRpdmA7XG4gICAgdGhpcy5vcHQgPSBvcHQ7XG4gICAgdGhpcy5uYW1lID0gb3B0Lm5hbWUgfHwgJyc7XG4gICAgdGhpcy5zdHlsZSA9IG9wdC5zdHlsZSB8fCB7fTtcbiAgICB0aGlzLmV2ZW50cyA9IG9wdC5ldmVudHMgfHwge307XG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICB9XG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuX3NldEVsZW1lbnQoKTtcbiAgICB0aGlzLl9ldmVudGlmeSgpO1xuICAgIHRoaXMuYXBwbHlTdHlsZSgpO1xuICB9XG4gIF9zZXRFbGVtZW50KCkge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMub3B0LmVsKTtcbiAgICB0aGlzLmVsLnRleHRDb250ZW50ID0gdGhpcy5vcHQudGV4dCB8fCAnJztcbiAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG4gIG1vdW50KHNlbGVjdG9yKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gIH1cbiAgYXBwbHlTdHlsZSgpIHtcbiAgICBmb3IodmFyIGtleSBpbiB0aGlzLnN0eWxlKSB7XG4gICAgICBpZiAodGhpcy5zdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGVba2V5XSA9IHRoaXMuc3R5bGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX2V2ZW50aWZ5KCkge1xuICAgIGZvcih2YXIgZXZlbnROYW1lIGluIHRoaXMuZXZlbnRzKSB7XG4gICAgICBpZiAodGhpcy5ldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50KGV2ZW50TmFtZSwgdGhpcy5ldmVudHNbZXZlbnROYW1lXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFkZEV2ZW50KGV2ZW50TmFtZSwgY2IpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgPiBydW4gJHt0aGlzLm5hbWV9YCk7XG4gICAgICB0cnkge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgICAgY2F0Y2goZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gIH1cbiAgYWRkKGVscykge1xuICAgIGlmIChlbHMubGVuZ3RoKSB7XG4gICAgICBmb3IodmFyIGkgPSAwLCBsZW5nID0gZWxzLmxlbmd0aDsgaSA8IGxlbmc7IGkrKykge1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVsc1tpXS5lbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbHMuZWwpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEVsZW0gZnJvbSAnLi9FbGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBFbGVtIHtcbiAgY29uc3RydWN0b3Iob3B0ID0ge30pIHtcbiAgICBvcHQuZWwgPSAnZnJhbWUnXG4gICAgb3B0LnN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y5ZmFmOScsXG4gICAgICBwYWRkaW5nOiAnNXB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFweCcsXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMiknLFxuICAgICAgbWFyZ2luVG9wOiAnMTBweCdcbiAgICB9O1xuICAgIFxuICAgIHN1cGVyKG9wdCk7XG4gIH1cbn1cbiIsImltcG9ydCBFbGVtIGZyb20gJy4vRWxlbSc7XG5pbXBvcnQgQ29kZUJ0biBmcm9tICcuL0NvZGVCdG4nO1xuaW1wb3J0IENvZGUgZnJvbSAnLi9Db2RlJztcbmltcG9ydCBCdG4gZnJvbSAnLi9CdG4nO1xuaW1wb3J0IEZ1bmNMYWJlbCBmcm9tICcuL0Z1bmNMYWJlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmMgZXh0ZW5kcyBFbGVtIHtcbiAgY29uc3RydWN0b3Iob3B0ID0ge30pIHtcbiAgICB0aGlzLmZuID0gb3B0LmZuO1xuICAgIHRoaXMudGV4dCA9IG9wdC50ZXh0O1xuICAgIG9wdC5lbCA9ICdmdW5jJztcbiAgICBvcHQudGV4dCA9ICcnO1xuICAgIG9wdC5zdHlsZSA9IHtcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IGRhc2hlZCByZ2JhKDAsMCwwLC4yKScsXG4gICAgICBwYWRkaW5nOiAnNXB4J1xuICAgIH1cbiAgICBzdXBlcihvcHQpO1xuICAgIHRoaXMuX2luaXRFbGVtZW50KCk7XG4gIH1cbiAgX2luaXRFbGVtZW50KCkge1xuICAgIHRoaXMuYnRuID0gbmV3IENvZGVCdG4oKTtcbiAgICB0aGlzLmNvZGUgPSBuZXcgQ29kZSh7XG4gICAgICB0ZXh0OiB0aGlzLl90b1N0cmluZygpXG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5hZGQoW1xuICAgICAgbmV3IEZ1bmNMYWJlbCh7XG4gICAgICAgIHRleHQ6IHRoaXMudGV4dFxuICAgICAgfSksXG4gICAgICBuZXcgQnRuKHtcbiAgICAgICAgbmFtZTogdGhpcy50ZXh0LFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogdGhpcy5mblxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHRoaXMuYnRuLFxuICAgICAgdGhpcy5jb2RlXG4gICAgXSk7XG4gICAgdGhpcy5idG4uZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNvZGUuc2hvdygpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgX3RvU3RyaW5nKCkge1xuICAgIHZhciBjb2Rlc3RyaW5nID0gdGhpcy5mbi50b1N0cmluZygpLnNwbGl0KCdcXG4nKTtcbiAgICBjb2Rlc3RyaW5nLnNwbGljZSgtMSwgMSk7XG4gICAgY29kZXN0cmluZy5zcGxpY2UoMCwgMSk7XG4gICAgdmFyIGZpcnN0SW5kZW50ID0gY29kZXN0cmluZ1swXS5tYXRjaCgvXlxccyovKVswXTtcbiAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChgXFxeJHtmaXJzdEluZGVudH1gKTtcbiAgICBmb3IodmFyIGkgPSAwLCBsZW5nID0gY29kZXN0cmluZy5sZW5ndGg7IGkgPCBsZW5nOyBpKyspIHtcbiAgICAgIGNvZGVzdHJpbmdbMF0gPSBjb2Rlc3RyaW5nWzBdLnJlcGxhY2UocmVnLCAnJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjb2Rlc3RyaW5nLmpvaW4oJ1xcbicpO1xuICB9XG59XG4iLCJpbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmNMYWJlbCBleHRlbmRzIExhYmVsIHtcbiAgY29uc3RydWN0b3Iob3B0ID0ge30pIHtcbiAgICBzdXBlcihvcHQpO1xuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBtYXJnaW46ICcwIDAgNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBjb2xvcjogJ3JnYig1MSwgNTEsIDUxKSdcbiAgICB9O1xuICAgIHRoaXMuYXBwbHlTdHlsZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgRWxlbSBmcm9tICcuL0VsZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIEVsZW0ge1xuICBjb25zdHJ1Y3RvcihvcHQgPSB7fSkge1xuICAgIG9wdC50ZXh0ID0gb3B0LnRleHQgfHwgJ2xhYmVsJztcbiAgICBvcHQuZWwgPSAnbGFiZWwnO1xuICAgIG9wdC5zdHlsZSA9IHtcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBjb2xvcjogJyM5ZjlmOWYnLFxuICAgICAgdGV4dFNoYWRvdzogJy0xcHggLTFweCByZ2JhKDI1NSwyNTUsMjU1LCAuMiknLFxuICAgICAgbWFyZ2luOiAnOHB4IDAgNXB4J1xuICAgIH07XG4gICAgXG4gICAgc3VwZXIob3B0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVwbGFjZWxvZywgcmVwbGFjZXdhcm4sIHJlcGxhY2VlcnJvciB9IGZyb20gJy4vcmVwbGFjZWxvZyc7XG5pbXBvcnQgRWxlbSBmcm9tICcuL0VsZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cgZXh0ZW5kcyBFbGVtIHtcbiAgY29uc3RydWN0b3Iob3B0ID0ge30pIHtcbiAgICBvcHQuZWwgPSAnbG9nJztcbiAgICBvcHQuc3R5bGUgPSB7XG4gICAgICBjb2xvcjogJyMxNWRmMzAnLFxuICAgICAgcGFkZGluZzogJzVweCA3cHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMzMycsXG4gICAgICBsaW5lSGVpZ2h0OiAnMS41JyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBmb250RmFtaWx5OiAnXCJVYnVudHUgTW9ub1wiLCBzYW5zLXNlcmlmJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICBtYXJnaW46ICcwJyxcbiAgICAgIG1pbkhlaWdodDogJzE5cHgnLFxuICAgICAgd2hpdGVTcGFjZTogJ3ByZScsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4xZW0nXG4gICAgfTtcbiAgICBcbiAgICBzdXBlcihvcHQpO1xuICAgIHJlcGxhY2Vsb2codGhpcy5lbCk7XG4gICAgcmVwbGFjZXdhcm4odGhpcy5lbCk7XG4gICAgcmVwbGFjZWVycm9yKHRoaXMuZWwpO1xuICB9XG59XG4iLCJpbXBvcnQgRWxlbSBmcm9tICcuL0VsZW0nO1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciBleHRlbmRzIEVsZW0ge1xuICBjb25zdHJ1Y3RvcihvcHQgPSB7fSkge1xuICAgIG9wdC5lbCA9ICdsb2dnZXInO1xuICAgIG9wdC5zdHlsZSA9IHtcbiAgICAgIHBhZGRpbmc6ICc1cHgnXG4gICAgfVxuICAgIFxuICAgIHN1cGVyKG9wdCk7XG4gICAgdGhpcy5faW5pdEVsZW1lbnQoKTtcbiAgfVxuICBfaW5pdEVsZW1lbnQoKSB7XG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbCh7dGV4dDogJ2NvbnNvbGUubG9nJ30pO1xuICAgIHRoaXMubG9nID0gbmV3IExvZygpO1xuICAgIHRoaXMuYWRkKFt0aGlzLmxhYmVsLCBuZXcgTG9nKCldKTtcbiAgfVxufVxuIiwidmFyIFBSRSA9ICdkbC0nO1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2Vsb2coZWwpIHtcbiAgdmFyIF9sb2cgPSBjb25zb2xlLmxvZztcbiAgY29uc29sZS5sb2cgPSAoLi4uYXJncykgPT4ge1xuICAgIF9sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmcgPSBhcmdzLmxlbmd0aDsgaSA8IGxlbmc7IGkrKykge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldID09ICdvYmplY3QnKSB7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKEpTT04uc3RyaW5naWZ5KGFyZ3NbaV0sIG51bGwsIDIpICsgJ1xcbicpKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgndW5kZWZpbmVkIFxcbicpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcmdzW2ldICsgJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNld2FybihlbCkge1xuICB2YXIgX3dhcm4gPSBjb25zb2xlLndhcm47XG4gIGNvbnNvbGUud2FybiA9ICguLi5hcmdzKSA9PiB7XG4gICAgX3dhcm4uYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgdmFyIHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke1BSRX13YXJuYCk7XG4gICAgd3JhcC5zdHlsZS5jb2xvciA9IFwicmdiKDI0NSwgMjI4LCAzOClcIjtcbiAgICBcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZyA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuZzsgaSsrKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShKU09OLnN0cmluZ2lmeShhcmdzW2ldLCBudWxsLCAyKSArICdcXG4nKSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgndW5kZWZpbmVkIFxcbicpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFyZ3NbaV0gKyAnXFxuJykpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBlbC5hcHBlbmRDaGlsZCh3cmFwKTtcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VlcnJvcihlbCkge1xuICB2YXIgX2Vycm9yID0gY29uc29sZS5lcnJvcjtcbiAgY29uc29sZS5lcnJvciA9ICguLi5hcmdzKSA9PiB7XG4gICAgX2Vycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIHZhciB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtQUkV9d2FybmApO1xuICAgIHdyYXAuc3R5bGUuY29sb3IgPSBcInJnYigyNTUsIDUyLCA1MilcIjtcbiAgICBcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZyA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuZzsgaSsrKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShKU09OLnN0cmluZ2lmeShhcmdzW2ldLCBudWxsLCAyKSArICdcXG4nKSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd3JhcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgndW5kZWZpbmVkIFxcbicpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFyZ3NbaV0gKyAnXFxuJykpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBlbC5hcHBlbmRDaGlsZCh3cmFwKTtcbiAgfVxufTtcbiJdfQ==
