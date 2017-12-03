import Component from '@ember/component';

export default Component.extend({
	didInsertElement() {
		this._super(...arguments);
		this.$().datepicker({});
	},
	willDestroyElement() {
		//remove the listener
		this.$().off('.datepicker.data-api');
	}
});
