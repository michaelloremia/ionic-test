import {Page, NavController} from 'ionic-angular';
import {StringProvider} from '../../providers/helpers/string-provider';
import {NewsletterProvider} from '../../providers/newsletter-provider/newsletter-provider';
import {NewsletterViewerPage} from '../../pages/newsletter-viewer/newsletter-viewer';

/*
  Generated class for the NewsletterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/newsletter/newsletter.html'
})
export class NewsletterPage {
  public newsletters: any;
  
  constructor(public nav: NavController, public newsletterProvider: NewsletterProvider, public stringHelper: StringProvider) {
    this.newsletterProvider.load()
        .then(data => {
          this.newsletters = data.letters;
        });
  }
  
  getNewsLetters() {
    this.newsletterProvider.load()
        .then(data => {
          this.newsletters = data.letters;
        });
  }
  
  gotoNewsletter(data) {
    this.nav.push(NewsletterViewerPage, data);
  }
}
