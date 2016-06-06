import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
     rentals: this.store.findAll('rental'),
     announcements: this.store.findAll('announcement')
    });
   },
   actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});


//The RSVP.hash returns a new promise that is only fulfilled when all promises it contains are fulfilled