import Controller from '@ember/controller';

export default Controller.extend({
   
    actions: {
        createNew(data){
          this.store.createRecord('dash', {
            id: data.id,
            firstname: data.firstname,
            lastname: data.lastname,
            age: data.age
          });
          return data;
        }
        // createDash() { 
        //   let d = new Date();
        //   let id = d.getMilliseconds()+''+d.getMinutes();
        //   this.store.createRecord('dash', {
        //     id: id,
        //     firstname: this.get('firstname'),
        //     lastname: this.get('lastname'),
        //     age: this.get('age')
        //   });
        //   this.set('firstname', '');
        //   this.set('lastname', '');
        //   this.set('age', '');
        // }
    }
});
