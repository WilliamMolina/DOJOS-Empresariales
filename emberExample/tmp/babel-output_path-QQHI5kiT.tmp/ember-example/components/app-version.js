define('ember-example/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ember-example/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emberExampleConfigEnvironment) {

  var name = _emberExampleConfigEnvironment['default'].APP.name;
  var version = _emberExampleConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});