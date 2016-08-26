import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.csv.onCreated(function helloOnCreated() {
    Meteor.call('parseCsv', 'test', (err, resp) => {
        alert(resp);
    });
});

Template.csv.helpers({
  counter() {

  },
});

Template.csv.events({
  'click button'(event, instance) {
    alert(11);
  },
});
