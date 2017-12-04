import Route from '@ember/routing/route';

export default Route.extend({
	title: 'User Home',
	/*feed: Ember.inject.service('newsfeed'),
	item: this.get('feed').findAllForSubreddit('finance'),
	model(params) {
		this.get('feed').findAllForSubreddit('finance');
		let event = this.get('feed').feedItems; 
		console.log(event);
		return this.get('feed');
	}*/
});
