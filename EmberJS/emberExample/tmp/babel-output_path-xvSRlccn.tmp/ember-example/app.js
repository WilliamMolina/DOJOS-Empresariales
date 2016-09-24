define('ember-example/app', ['exports', 'ember', 'ember-example/resolver', 'ember-load-initializers', 'ember-example/config/environment'], function (exports, _ember, _emberExampleResolver, _emberLoadInitializers, _emberExampleConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberExampleConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberExampleConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberExampleResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberExampleConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});