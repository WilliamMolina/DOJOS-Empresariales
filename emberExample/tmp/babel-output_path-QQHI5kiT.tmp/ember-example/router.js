define('ember-example/router', ['exports', 'ember', 'ember-example/config/environment'], function (exports, _ember, _emberExampleConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberExampleConfigEnvironment['default'].locationType,
    rootURL: _emberExampleConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('contact');
    this.route('about');
    this.route('places');
  });

  exports['default'] = Router;
});