import Component from '@ember/component';
import editDash from '../controllers/edit-dash';
import {inject} from '@ember/service'

export default Component.extend({
    router: inject(),
    init() {
        this._super(...arguments);
    },
    actions: {
        formAction() { 
            console.log(this.id);
            let data = {
                firstname: this.get('firstname'),
                lastname: this.get('lastname'),
                age: this.get('age')
            }
            if (typeof this.id === 'undefined'){
                let d = new Date();
                let id = d.getMilliseconds()+''+d.getMinutes();
                data.id=id;
                this.set('firstname', '');
                this.set('lastname', '');
                this.set('age', '');
                let create = this.filter;
                create(data);
            }
            else{
                
                data.id=this.id;
                this.edit(data);
                this.set('firstname', '');
                this.set('lastname', '');
                this.set('age', '');
                this.get('router').transitionTo('viewDash');
            }
            
            
            
          
        }
    }
});
