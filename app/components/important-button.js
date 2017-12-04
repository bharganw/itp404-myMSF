import Component from '@ember/component';

export default Component.extend({
	click() {
		let importantToggled = !this.get('starred');
		this.get('onclick')(importantToggled);
	}
});
