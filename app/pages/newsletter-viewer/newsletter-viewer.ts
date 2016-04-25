import {NavController, Page} from 'ionic-angular';
import {NewsletterPage} from '../newsletter/newsletter';
import {ReferencesPage} from '../references/references';


@Page({
  templateUrl: 'build/pages/newsletter-viewer/newsletter-viewer.html'
})
export class NewsletterViewerPage {
  tab1Root: new NewsletterPage;
  tab2Root: string;
  

  constructor(public nav: NavController) {
    // set the root pages for each tab
    this.tab1Root = NewsletterPage;
    this.tab2Root = ReferencesPage;
    
  }
}
