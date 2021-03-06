define('ember-cli-mirage/route-handlers/shorthands/base', ['exports', 'lodash/lang/isArray', 'ember-cli-mirage/utils/inflector', 'ember-cli-mirage/route-handlers/base'], function (exports, _lodashLangIsArray, _emberCliMirageUtilsInflector, _emberCliMirageRouteHandlersBase) {
  'use strict';

  var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  })();

  var _get = function get(_x2, _x3, _x4) {
    var _again = true;_function: while (_again) {
      var object = _x2,
          property = _x3,
          receiver = _x4;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
          return undefined;
        } else {
          _x2 = parent;_x3 = property;_x4 = receiver;_again = true;desc = parent = undefined;continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;if (getter === undefined) {
          return undefined;
        }return getter.call(receiver);
      }
    }
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var BaseShorthandRouteHandler = (function (_BaseRouteHandler) {
    _inherits(BaseShorthandRouteHandler, _BaseRouteHandler);

    function BaseShorthandRouteHandler(schema, serializerOrRegistry, shorthand, path) {
      var _this = this;

      var options = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

      _classCallCheck(this, BaseShorthandRouteHandler);

      _get(Object.getPrototypeOf(BaseShorthandRouteHandler.prototype), 'constructor', this).call(this);
      shorthand = shorthand || this.getModelClassFromPath(path);
      this.schema = schema;
      this.serializerOrRegistry = serializerOrRegistry;
      this.shorthand = shorthand;
      this.options = options;

      var type = (0, _lodashLangIsArray['default'])(shorthand) ? 'array' : typeof shorthand;
      if (type === 'string') {
        (function () {
          var modelClass = _this.schema[(0, _emberCliMirageUtilsInflector.pluralize)((0, _emberCliMirageUtilsInflector.camelize)((0, _emberCliMirageUtilsInflector.singularize)(shorthand)))];
          _this.handle = function (request) {
            return _this.handleStringShorthand(request, modelClass);
          };
        })();
      } else if (type === 'array') {
        (function () {
          var modelClasses = shorthand.map(function (modelName) {
            return _this.schema[(0, _emberCliMirageUtilsInflector.pluralize)((0, _emberCliMirageUtilsInflector.camelize)((0, _emberCliMirageUtilsInflector.singularize)(modelName)))];
          });
          _this.handle = function (request) {
            return _this.handleArrayShorthand(request, modelClasses);
          };
        })();
      }
    }

    _createClass(BaseShorthandRouteHandler, [{
      key: 'handleStringShorthand',
      value: function handleStringShorthand() {}
    }, {
      key: 'handleArrayShorthand',
      value: function handleArrayShorthand() {}
    }]);

    return BaseShorthandRouteHandler;
  })(_emberCliMirageRouteHandlersBase['default']);

  exports['default'] = BaseShorthandRouteHandler;
});