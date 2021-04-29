import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        // editDash(firstname,lastname,age,id) { 
        //   this.store.findRecord('dash', id).then(function(dash) {
        //     // ...after the record has loaded
        //     dash.firstname = firstname;
        //     dash.lastname = lastname;
        //     dash.age = age
        //     dash.save();
        //   });
        editDash(data) { 
          this.store.findRecord('dash', data.id).then(function(dash) {
            // ...after the record has loaded
            dash.firstname = data.firstname;
            dash.lastname = data.lastname;
            dash.age = data.age
            dash.save();
          });
            
      }
    }
});
