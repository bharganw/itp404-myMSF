import Component from '@ember/component';

import $ from 'jquery';

export default Component.extend({
	didInsertElement() {
		$('#calendar').fullCalendar({
			header: {
				left: 'prev',/*,next today',*/
				center: 'title',
				right: 'next'/*month,basicWeek,basicDay'*/
			},
			navLinks: false, // can click day/week names to navigate views
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			handleWindowResize: true,
			windowResizeDelay: 100,
			googleCalendarApiKey: 'AIzaSyBKLpf1hjr1Y7E4TrMRkyd4lHaMuzq9QKA',
			eventSources: [
				{
					googleCalendarId: 'uscmsf@gmail.com',
					id: 'main-calendar',
					color: 'rgba(236, 206, 119, 0.75)',/*Border color for the event box. */
					/*This didn't work $(this).css({ 'color': 'rgba(162,0,0,1)', 'font-size': '150%' }),  */

					/* I am doing the different ways we can play with the color settings*/
					backgroundColor: 'rgba(236, 206, 119, 0.75)', /* Fill color for the insde of the box*/
					textColor: 'black' /*Text color of the event*/,
				},
				{
					googleCalendarId: 'jrt8jonh799piuot261af9pot4@group.calendar.google.com',
					id: 'birthdays-calendar',
					color: 'rgba(212, 212, 212, 0)',
					backgroundColor: 'rgba(212, 212, 212, 0)',
					textColor: 'black' /*Text color of the event*/,
					className: 'Birthdays',
					imageurl: 'http://i.stack.imgur.com/ILTQq.png',
				}
			],
			/*eventAfterRender: function(event, element) {
				element.find(".Birthdays").before($("<span class=\"fc-event-icons\"></span>").html("<p>Hi</p><img src=\"/images/pass.png\" />"));
			
			}*/
			/*element.find(".fc-event-title").after($("<span class=\"fc-event-icons\"></span>").html("<img src=\"/images/pass.png\" />"));*/
				

		});
	}
});
