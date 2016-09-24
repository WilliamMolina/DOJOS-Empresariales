define('ember-example/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-example/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberExampleConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emberExampleConfigEnvironment['default'].APP.name, _emberExampleConfigEnvironment['default'].APP.version)
  };
});