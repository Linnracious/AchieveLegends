import {Aurelia, autoinject} from 'aurelia-framework';

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
}
