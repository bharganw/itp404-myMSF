import DS from 'ember-data';
import config from 'my-msf/config/environment'

export default DS.RESTAdapter.extend({
	host: config.apihost,
	namespace: 'api',
	deleteRecord() {
		return this._super(...arguments).then(() => {
			return null;
		});
	}
});