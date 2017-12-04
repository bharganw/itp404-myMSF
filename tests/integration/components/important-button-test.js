import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('important-button', 'Integration | Component | important button', {
  integration: true
});

test('it renders full star when starred is true', function (assert) {
  this.set('isStarred', true);
  this.set('star', function() {});
  this.render(hbs`
    {{important-button starred=isStarred}}
  `);
  assert.equal(this.$('fa-star-o').length, 0);
});


test('it renders empty star when starred is false', function (assert) {
  this.set('isStarred', false);
  this.set('star', function() {});
  this.render(hbs`
    {{important-button starred=isStarred}}
  `);
  assert.equal(this.$('fa-star').length, 0);
});