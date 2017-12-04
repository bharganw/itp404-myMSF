import { test } from 'qunit';
import moduleForAcceptance from 'my-msf/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | single announcement');

test('creates announcement', function(assert) {
	let title = this.title();

	assert.ok(title);
});