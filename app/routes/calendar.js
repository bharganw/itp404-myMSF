import Route from '@ember/routing/route';

export default Route.extend({
	title: 'Program Calendar',
	model() {
		$.ajax({
			type: 'GET',
			url: `https://www.googleapis.com/calendar/v3/calendars/8csfhq6p7hcoo136k9i6e40jlo@group.calendar.google.com/events`,
		}).then(function(repos) {
			return (repos);
		});
	}
});
