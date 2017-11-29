import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string'),
	created: DS.attr('date'),
	deadline: DS.attr('date'),
	important: DS.attr('boolean')
});