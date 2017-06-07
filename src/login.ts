import {Aurelia, autoinject} from 'aurelia-framework';
import 'arrive';
import 'bootstrap-material-design';

@autoinject()
export class Login {
    username = '';
    password = '';
    isLoggedIn = false;

    constructor(){
     }

    submit(){
        return true;
    }

    validation = function(username: string, password: string){
        if(username === 'Linnaeus' && password === 'password'){
            this.isLoggedIn = true;
            return true;
        } else {
            this.isLoggedIn = false;
            return false;
        }
    }

    userIsLoggedIn(){
        return this.isLoggedIn;
    }

    activate (){
        $.material.init();
    }
}
