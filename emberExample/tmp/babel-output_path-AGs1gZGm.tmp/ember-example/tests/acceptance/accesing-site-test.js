define('ember-example/tests/acceptance/accesing-site-test', ['exports', 'qunit', 'ember-example/tests/helpers/module-for-acceptance'], function (exports, _qunit, _emberExampleTestsHelpersModuleForAcceptance) {

  (0, _emberExampleTestsHelpersModuleForAcceptance['default'])('Acceptance | accesing site');

  (0, _qunit.test)('should link to information about the company.', function (assert) {
    visit('/');
    click('a:contains("Nosotros")');
    andThen(function () {
      assert.equal(currentURL(), '/about', 'should navigate to about');
    });
  });

  (0, _qunit.test)('should link to contact information', function (assert) {
    visit('/');
    click('a:contains("Contacto")');
    andThen(function () {
      assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });
  });
});