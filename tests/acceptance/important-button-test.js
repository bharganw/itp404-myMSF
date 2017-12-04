import { test } from 'qunit';
import moduleForAcceptance from 'my-msf/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | important button');

test('it renders an empty star when starred is false', function(assert) {
	this.set('isStarred', false);
	this.set('star', function(announcement) {});
	this.render(hbs`
		{{important-button starred=isStarred onclick=(action "star" announcement)}}
	`);
	assert.equal(this.$('.fa-star').length, 0);
	assert.equal(this.$('.fa-star-o').length, 1);
});

/*test('visiting /important-button', function(assert) {
  visit('/important-button');

  andThen(function() {
    assert.equal(currentURL(), '/important-button');
  });
});*/
