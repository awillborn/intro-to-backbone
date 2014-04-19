Person = Backbone.Model.extend({
  initialize: function(){
    alert("Welcome to this world";)
  }
});


//setting attributes
//option 1
var person = new Person({name: "Thomas", age: 67, child: "Ryan"});

//option 2
var person = new Person();
person.set({name: "Thomas", age: 67, child: "Ryan"});

//getting attribues
var age = person.get("age"); //67
var name = person.get("name"); //"Thomas"
var child = person.get("child"); //"Ryan"

//setting default attributes

Person = Backbone.Model.extend({
  defaults: {
    name: 'Fetus',
    age: 0,
    child: ''
  },
  initialize: function(){
    alert("Welcome to this world");
  }
});

//manipulate model attributes

Person = Backbone.Model.extend({
  defaults: {
    name: 'Fetus',
    age: 0,
    child: ''
  },
  initialize: function(){
    alert("Welcome to this world");
  },
  adopt: function(newChildsName):
    this.set({child: newChildsName});
});

//listen for changes to the model

Person = Backbone.Model.extend({
  defaults: {
    name: 'Fetus',
    age: 0
  },

  initialize: function(){
    alert("Welcome to this world");
    this.on("change:name", function(model){
      var name = model.get("name");
      alert("Changed name to " + name);
    })
  }

});


//interacting with the server

var UserModel = Backbone.model.extend({
  urlRoot: '/user',
  defaults: {
    name: '',
    email: ''
  }
})

//creating a new model

var UserModel = Backbone.Model.extend({
  urlRoot: '/user',
  defaults: {
    name: '',
    email: ''
  }
});

var user = new UserModel();
var userDetails = {
  name: 'Thomas',
  email: 'thomassmith@gmail.com'
}

//haven't set an id, so the server will call POST /user
user.save(userDetails, {
  success: function(user){
    alert(user.toJSON());
  }
})

//table now has the values:
//1, 'Thomas', 'thomassmith@gmail.com'

//Getting a model

//set the id so it doesn't create a post route to make a new user
var user = new UserModel({id: 1})

//fetch performs GET /user/1
user.fetch({
  success: function(user){
    alert(user.toJSON());
  }
})

//updating a model
var user = new UserModel({
  id: 1,
  name: 'Thomas',
  email: 'thomassmith@gmail.com'
});

//id is present so Backbone.js will fire
//PUT /user/1 with payload of {name: "Smith", email: thomassmith@gmail.com}
user.save({name: 'Smith'}, {
  success: function(model){
    alert(user.toJSON());
  }
}

//deleting a model
var user = new UserModel({
  id: 1,
  name: 'Thomas',
  email: 'thomassmith@gmail.com'
});

user.destroy({
  success: function(){
    alert('Destroyed')
  }
})

//get all current attributes

var person = new Person({ name: "Thomas", age: 67});
var attributes = person.toJSON();


//validate data before saving

Person = Backbone.Model.extend({
  validate: function(attributes){
    if(attributes.age < 0 && attributes.name != "Dr. Manhatten") {
      return "You can't be negative years old"
    }
  }
})