import Component from '@ember/component';

export default Component.extend({
	isShowingModal: false,
	actions: {	
		updateAnnouncement(announcementToUpdate, e) {
			e.preventDefault(); //prevent page from refreshing
			announcementToUpdate.save();//Ember knows that we are updating an existing property i.e. PUT AJAX call to api/posts/:id
		},
		deleteAnnouncement(announcement, e) {
			announcement.destroyRecord(); //Delete AJAX call behind the scenes
			//The error in the console is because loopback deveates a little from RESTful.. 
			//It  returns the length instead of no argument
			//toastr.error('Something went wrong. Please try again.');
		},
		toggleModal: function() {
        	this.toggleProperty('isShowingModal');
    	}
	}
});