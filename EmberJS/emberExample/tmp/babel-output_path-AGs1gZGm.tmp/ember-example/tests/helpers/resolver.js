define('ember-example/tests/helpers/resolver', ['exports', 'ember-example/resolver', 'ember-example/config/environment'], function (exports, _emberExampleResolver, _emberExampleConfigEnvironment) {

  var resolver = _emberExampleResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberExampleConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberExampleConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});