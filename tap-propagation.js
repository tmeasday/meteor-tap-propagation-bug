if (Meteor.isClient) {
  var Messages = new Meteor.Collection(null);
  
  Template.hello.messages = function() { return Messages.find(); }
  
  Template.hello.events({
    'tap input, click input': function (event) {
      Messages.insert({message: event.type + " event triggered on outer template"});
    },
    'tap .container, click .container': function (event) {
      Messages.insert({message: event.type + " event triggered on outer template, different element"});
    }
  });
  
  Template.there.events({
    'tap input, click input': function (event) {
      event.stopImmediatePropagation();
      Messages.insert({message: event.type + " event triggered on inner template"});
    }
  });
  
}
