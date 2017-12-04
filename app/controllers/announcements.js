/*eslint eqeqeq:0*/
import Controller from '@ember/controller';

export default Controller.extend({
	isShowingCreatedModal: false,
	actions: {
		createAnnouncement(e) {
			e.preventDefault();
			var today = Date.now();
			/*eslint-disable */
			if(!this.get('title')) {
				toastr.error('Please enter a title'); // eslint-disable-next-line no-use-before-define
				return;
			}
			this.toggleProperty('isShowingCreatedModal');
			let announcement = this.store.createRecord('announcement', {
				title: this.get('title'),
				body: this.get('body'),
				created: today,
				important: false
			});
			announcement.save().then(function() {
				toastr.success('Announcement was created');
			});
			/*eslint-enable */
		},
		toggleCenteredScrolling() {
			this.toggleProperty('isShowingCreatedModal');
		}
	}
});
