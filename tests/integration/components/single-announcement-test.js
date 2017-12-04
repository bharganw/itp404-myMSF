import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('single-announcement', 'Integration | Component | single announcement', {
  integration: true
});

test('it renders announcement', function (assert) {
  let announcement = {
        title: 'Hi',
        body: 'Body',
        important: false
      };
  this.set('announcement', announcement);
  this.render(hbs`
    {{single-announcement announcement=announcement}}
  `);
  
  assert.equal(this.$().text().trim().substring(0, 2), 'Hi');
});