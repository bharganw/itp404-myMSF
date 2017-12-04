import Service from '@ember/service';

export default Service.extend({
	feedItems: null,
	findAllForSubreddit(subreddit) {
		
		/*eslint-disable */
		$.ajax({
			type: 'GET',
			url: `https://www.reddit.com/r/${subreddit}.json`,
		}).then(function(repos) {
			toastr.success('Received the lastest Finance news');
			feedItems: repos;
			//return (repos);
		});
		/*eslint-enable */
	}
});
