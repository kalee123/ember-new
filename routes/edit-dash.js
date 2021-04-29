import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        console.log(params.id);   
        let id = params.id;     
        console.log(this.store.findAll('dash',id));

        return this.store.peekRecord('dash',id);
        
    }
});
