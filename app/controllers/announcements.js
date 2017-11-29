import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		//e is the event
		/*deleteAnnouncement(announcement, e) {
			announcement.destroyRecord(); //Delete AJAX call behind the scenes
			//The error in the console is because loopback deveates a little from RESTful.. 
			//It  returns the length instead of no argument
			//toastr.error('Something went wrong. Please try again.');
		},*/
		createAnnouncement(e) {
			e.preventDefault(); //prevent page from refreshing
			let announcement = this.store.createRecord('announcement', {
				title: this.get('title'),
				body: this.get('body')
			});//just creates record in memory but does not save it
			announcement.save();//Look at adapter, use those values and do a save request i.e. POST AJAX call
		}/*,
		updateAnnouncement(announcementToUpdate, e) {
			e.preventDefault(); //prevent page from refreshing
			announcementToUpdate.save();//Ember knows that we are updating an existing property i.e. PUT AJAX call to api/posts/:id
		}*/
	}
});
