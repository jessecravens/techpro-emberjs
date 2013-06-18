if (typeof PC == "undefined" || !PC) {
	var PC = {};
}

PC.BballLeague = Ember.Application.create({
	LOG_TRANSITIONS: true
});

PC.BballLeague.Router.map(function () {
	this.route("home", {
		path: "/"
	});
	this.resource('team', {
		path: '/team/:team_id'
	});
});

PC.BballLeague.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});

PC.BballLeague.Team = DS.Model.extend({
	name: DS.attr('string'),
	colors: DS.attr('string')
})

PC.BballLeague.HomeRoute = Ember.Route.extend({
	model: function () {
		return ['Coed', 'Saturdays from 9AM-3PM', 'at Park Center']

	},
	setupController: function (controller, model) {
		controller.set('info', model)
		controller.set('teams', PC.BballLeague.Team.find());
	}
});

PC.BballLeague.Team.FIXTURES = [{
		id: 1,
		name: 'Celtics',
		colors: 'Green, White'
	}, {
		id: 2,
		name: 'Lakers',
		colors: 'Yellow, Black'
	}, {
		id: 3,
		name: 'Bulls',
		colors: 'Red, Black'
	}, {
		id: 4,
		name: 'Mavericks',
		colors: 'Blue, White'
	}, {
		id: 5,
		name: 'Spurs',
		colors: 'Black, Grey, White'
	}];