define('ember-example/tests/test-helper', ['exports', 'ember-example/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberExampleTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberExampleTestsHelpersResolver['default']);
});