# AchieveLegends

## Development Notes

1. Download the Aurelia typescript navigation skeleton (https://github.com/aurelia/skeleton-navigation/tree/master/skeleton-typescript)
2. Copy the files to the project directory
3. Run npm install
4. Run npm install gulp -g
5. Run npm install jspm -g
6. Run jspm install -y
7. Run jspm install npm:bootstrap-material-design
8. Run jspm install npm:arrive
9. Run npm install typings -g
10. Run npm install @types/jquery --save-dev
12. Create custom_typings folder in root directory (e.g. - same level as typings folder)
13. Add a material.d.ts file and enter
  /// <reference path="../typings/index.d.ts"/>
  declare class Material {
      init(params?: any): any;
  }

  interface JQueryStatic {
      material: Material;
  }
14. run gulp watch

## Links
https://stackoverflow.com/questions/22196587/how-to-center-align-vertically-the-container-in-bootstrap
https://stackoverflow.com/questions/33458274/how-to-switch-between-login-page-and-app-with-aurelia
https://auth0.com/blog/creating-your-first-aurelia-app-from-authentication-to-calling-an-api/
