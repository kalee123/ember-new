import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        delete(id){
            console.log(id);
            this.store.findRecord('dash',id).then(function(dash) {
                dash.deleteRecord();
                dash.save();
              });
        }
    }
});
