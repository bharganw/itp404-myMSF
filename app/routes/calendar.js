import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
	title: 'Program Calendar',
	model() {
		/*$.ajax({
			type: 'GET',
			//url: `https://www.googleapis.com/calendar/v3/calendars/8csfhq6p7hcoo136k9i6e40jlo@group.calendar.google.com/events`,
			url: `https://calendar.google.com/calendar/ical/8csfhq6p7hcoo136k9i6e40jlo%40group.calendar.google.com/private-3551e6df0e82aeb1854af73ac4e21c1d/basic.ics`,
		}).then(function(repos) {
			return (repos);
		});*/

		let events = Ember.A([{
			title: 'Event 1',
			start: '2017-12-05T07:08:08',
			end: '2017-12-05T09:08:08'
		}, {
			title: 'Event 2',
			start: '2017-12-05T11:08:08',
			end: '2017-12-05T12:08:08'
		}, {
			title: 'Event 3',
			start: '2017-12-09T07:08:08',
			end: '2017-12-09T09:48:08'
		}, {
			title: 'Event 4',
			start: '2017-12-15T07:15:08',
			end: '2017-12-15T09:08:08'
		}]);
		return events;
	}
});
