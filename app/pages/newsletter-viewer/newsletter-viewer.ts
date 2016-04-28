import {NavController, Page, NavParams} from 'ionic-angular';
import {NewsletterViewPage} from '../newsletter-view/newsletter-view';
import {ReferencesPage} from '../references/references';


@Page({
  templateUrl: 'build/pages/newsletter-viewer/newsletter-viewer.html'
})
export class NewsletterViewerPage {
  tab1Root: any;
  tab2Root: any;
  rootParams: any;

  constructor(public nav: NavController, public navParams: NavParams) {
    // set the root pages for each tab
    this.rootParams = navParams.data;
    this.tab1Root = NewsletterViewPage;
    this.tab2Root = ReferencesPage;
    
  }
}
