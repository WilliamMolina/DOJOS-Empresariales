import { test } from 'qunit';
import moduleForAcceptance from 'ember-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list place');

test('should redirect to places route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/places', 'should redirect automatically');
  });
});

test('should list available places.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});
