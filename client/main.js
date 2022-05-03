import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../lib/collection';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import './main.html';

Template.nav.events({
  'click .js-add'() {
    $("#addModal").modal("show");
  }
});

Template.main.events({
  'click .js-saveProfile'(){
    let pic = $("#profPic").val();
    let fname = $("#first").val();
    socialdb.insert({
    "picPath": pic,
    "fname": fname,
    "createdOn": mew Date()

  }
});

profile:
image
name 
age
sex 
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
