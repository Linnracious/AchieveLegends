import {Aurelia, autoinject} from 'aurelia-framework';
import 'arrive';
import 'bootstrap-material-design';

@autoinject()
export class Login {
    username: string;
    password: string;
    aurelia: Aurelia;
    isLoggedIn: boolean;

    constructor(aurelia: Aurelia){
        this.aurelia = aurelia;
        this.isLoggedIn = true;
    }

    submit(){
        if(this.validation(this.username, this.password)){
            console.log('congratz');
            this.aurelia.setRoot('shell');
        };
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
