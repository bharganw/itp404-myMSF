import Controller from '@ember/controller';
import Ember from 'ember';
import $ from 'jquery';

export default Controller.extend({
	actions: {
		weekView(){
			Ember.$('.full-calendar').fullCalendar('changeView', 'basicWeek');
			$(this).addClass('btn-active');
			$('#week_button').removeClass('btn-active');
		},
		monthView(){
			Ember.$('.full-calendar').fullCalendar('changeView', 'month');
			$(this).addClass('btn-active');
			$('#week_button').removeClass('btn-active');
		}
	}
});