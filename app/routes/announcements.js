import Route from '@ember/routing/route';

export default Route.extend({
	title: 'Program Announcements',
	model() {
		return this.store.findAll('announcement');
	}
});
