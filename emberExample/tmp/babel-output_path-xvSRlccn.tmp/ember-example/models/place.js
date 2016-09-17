define('ember-example/models/place', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr(),
    city: _emberData['default'].attr(),
    type: _emberData['default'].attr(),
    image: _emberData['default'].attr()
  });
});