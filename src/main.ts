import {Aurelia, autoinject} from 'aurelia-framework';
import 'bootstrap';
import 'bootstrap-material-design';
import 'nprogress';
import 'arrive';
import config from './authConfig';
import {Login} from './login';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-auth', (baseConfig) =>{baseConfig.configure(config);});

  //NProgress is responsible for the skinny loading bar at the top of the screen
  NProgress.configure({ showSpinner: false });
  $(document).ajaxStart(function () {
      NProgress.start();
  });
  $(document).ajaxStop(function () {
      NProgress.done();
  });

  let login = aurelia.container.get(Login);

  aurelia.start().then(() => {
    if(login.userIsLoggedIn()){
      aurelia.setRoot('shell')
    } else {
      aurelia.setRoot('login')
    }
  });
}
