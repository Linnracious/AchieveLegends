import {Router, RouterConfiguration} from 'aurelia-router';
import 'arrive';
import 'bootstrap-material-design';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'AchieveLegend';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' }
    ]);
    
    this.router = router;
  }
  attached(){
    $.material.init();
  }
}
