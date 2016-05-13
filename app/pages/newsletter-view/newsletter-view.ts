import {Page, NavController, NavParams} from 'ionic-angular';
import {ParallaxHeader} from '../../components/parallax-header/parallax-header';

/*
  Generated class for the NewsletterViewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/newsletter-view/newsletter-view.html',
  directives: [ParallaxHeader]
})
export class NewsletterViewPage {
  public data: any;
  
  constructor(public nav: NavController, public navParams: NavParams) {
    this.data = navParams.data;
  }
}