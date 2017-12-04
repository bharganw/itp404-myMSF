import { test } from 'qunit';
import moduleForAcceptance from 'my-msf/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | announcements');

test('should show modal', function(assert) {
  visit('/announcements');
  ////fillIn('#a-title', 'Hi');
  andThen(() => assert.equal(find('#modal').text(), false));
});