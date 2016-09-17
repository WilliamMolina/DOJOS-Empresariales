define('ember-example/tests/acceptance/list-place-test', ['exports', 'qunit', 'ember-example/tests/helpers/module-for-acceptance'], function (exports, _qunit, _emberExampleTestsHelpersModuleForAcceptance) {

  (0, _emberExampleTestsHelpersModuleForAcceptance['default'])('Acceptance | list place');

  (0, _qunit.test)('should redirect to places route', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(currentURL(), '/places', 'should redirect automatically');
    });
  });

  (0, _qunit.test)('should list available places.', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(find('.listing').length, 3, 'should see 3 listings');
    });
  });
});