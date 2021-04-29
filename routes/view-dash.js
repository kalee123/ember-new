import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        // console.log(this.store.findAll('dash').then((results)=>results));
        return this.store.findAll('dash');
    }
});