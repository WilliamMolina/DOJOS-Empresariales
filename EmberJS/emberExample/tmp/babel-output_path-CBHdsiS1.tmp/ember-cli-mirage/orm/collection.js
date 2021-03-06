define('ember-cli-mirage/orm/collection', ['exports', 'lodash/collection/invoke', 'ember-cli-mirage/assert'], function (exports, _lodashCollectionInvoke, _emberCliMirageAssert) {
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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  /**
   * An array of models, returned from one of the schema query
   * methods (all, find, where). Knows how to update and destroy its models.
   * @class Collection
   * @constructor
   * @public
   */

  var Collection = (function () {
    function Collection(modelName) {
      var models = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

      _classCallCheck(this, Collection);

      (0, _emberCliMirageAssert['default'])(modelName && typeof modelName === 'string', 'You must pass a `modelName` into a Collection');

      this.modelName = modelName;
      this.models = models;
    }

    /**
     * Updates each model in the collection (persisting immediately to the db).
     * @method update
     * @param key
     * @param val
     * @return this
     * @public
     */

    _createClass(Collection, [{
      key: 'update',
      value: function update() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _lodashCollectionInvoke['default'].apply(undefined, [this.models, 'update'].concat(args));

        return this;
      }

      /**
       * Destroys the db record for all models in the collection.
       * @method destroy
       * @return this
       * @public
       */
    }, {
      key: 'destroy',
      value: function destroy() {
        (0, _lodashCollectionInvoke['default'])(this.models, 'destroy');

        return this;
      }

      /**
       * Saves all models in the collection.
       * @method save
       * @return this
       * @public
       */
    }, {
      key: 'save',
      value: function save() {
        (0, _lodashCollectionInvoke['default'])(this.models, 'save');

        return this;
      }

      /**
       * Reloads each model in the collection.
       * @method reload
       * @return this
       * @public
       */
    }, {
      key: 'reload',
      value: function reload() {
        (0, _lodashCollectionInvoke['default'])(this.models, 'reload');

        return this;
      }

      /**
       * @method filter
       * @param f
       * @return {Collection}
       * @public
       */
    }, {
      key: 'filter',
      value: function filter(f) {
        var filteredModels = this.models.filter(f);

        return new Collection(this.modelName, filteredModels);
      }

      /**
       * @method mergeCollection
       * @param collection
       * @return this
       * @public
       */
    }, {
      key: 'mergeCollection',
      value: function mergeCollection(collection) {
        this.models = this.models.concat(collection.models);

        return this;
      }

      /**
       * Simple string representation of the collection and id.
       * @method toString
       * @return {String}
       * @public
       */
    }, {
      key: 'toString',
      value: function toString() {
        return 'collection:' + this.modelName + '(' + this.models.map(function (m) {
          return m.id;
        }).join(',') + ')';
      }
    }]);

    return Collection;
  })();

  exports['default'] = Collection;
});