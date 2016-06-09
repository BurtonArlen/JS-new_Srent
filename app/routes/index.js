import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
     rentals: this.store.findAll('rental'),
     cities: this.store.findAll('city'),
     announcements: this.store.findAll('announcement')
    });
   },

   actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      city.destroyRecord();
      this.transitionTo('index');
    }
  }
});


//The RSVP.hash returns a new promise that is only fulfilled when all promises it contains are fulfilled
