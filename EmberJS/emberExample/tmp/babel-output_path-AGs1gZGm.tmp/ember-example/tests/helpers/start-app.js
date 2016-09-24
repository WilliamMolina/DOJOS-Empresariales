define('ember-example/tests/helpers/start-app', ['exports', 'ember', 'ember-example/app', 'ember-example/config/environment'], function (exports, _ember, _emberExampleApp, _emberExampleConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberExampleConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberExampleApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});