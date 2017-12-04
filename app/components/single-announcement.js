import Component from '@ember/component';
import Ember from 'ember';
//import toastr;

export default Component.extend({
	isShowingModal: false,
	isStarred: Ember.computed('announcements', 'announcement.important', function() {
		return(this.get('announcement.important'));
	}),
	actions: {	
		/*eslint-disable */
		updateAnnouncement(announcementToUpdate, e) {
			// Update announcement
			e.preventDefault(); 
			announcementToUpdate.save().then(function() {
				// eslint-disable-next-line no-use-before-define
				toastr.success('Announcement was updated');
			});
		},
		deleteAnnouncement(announcement) {
			// Delete Announcement
			announcement.destroyRecord().then(function() {
				// eslint-disable-next-line no-use-before-define
				toastr.success('Announcement was deleted');
			});
		},
		toggleCenteredScrolling() {
			this.toggleProperty('isShowingModal');
		},
		star(announcement, newIsStarredValue) {
			this.set('isStarred', newIsStarredValue);
			let event = !this.get('announcement.important');
			this.set('announcement.important', event);
			announcement.save().then(function() {
				if(event) {
					toastr.success('Announcement was marked as important');
				} else {
					toastr.success('Announcement was unstarred');
				}
			});
		}
		/*eslint-enable */
	}
});