import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the NewsletterViewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/newsletter-view/newsletter-view.html',
})
export class NewsletterViewPage {
  constructor(public nav: NavController, public navParams: NavParams) {
    this.nav = nav;
    console.log(navParams.get('id'));
  }
}


@Page({
  template: "<ion-navbar *navbar> " +
      "<ion-title>Star</ion-title>" + 
    "</ion-navbar>" +
    "<ion-content>Tab 2</ion-content>"})
class tab {
  constructor (nav: NavController) {
    
  }
}


@Page({
  template: "<ion-navbar *navbar> " +
      "<ion-title>Star</ion-title>" + 
    "</ion-navbar>" +
    "<ion-content>Tab 2</ion-content>"
})
class tab2 {
  constructor (nav: NavController) {
    
  }
}