App = Ember.Application.create();

App.Router.map(function() {
  this.route("home", { path: "/" });
  this.resource('team', { path: '/team/:team_id' });
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Team = DS.Model.extend({
  name: DS.attr('string'),
  colors: DS.attr('string')
})

App.HomeRoute = Ember.Route.extend({
  model: function(){
   return ['Coed', 'Saturdays from 9AM-3PM', 'at Park Center']

  },
  setupController: function(controller, model){
    controller.set('info', model)
    controller.set('teams', App.Team.find());
  }
});

App.Team.FIXTURES = [{
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