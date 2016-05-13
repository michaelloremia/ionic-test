import {Page, NavController} from 'ionic-angular';
import {Component} from 'angular2/core';
import {NgStyle} from 'angular2/common';
import {StringProvider} from '../../providers/helpers/string-provider';
import {NewsletterProvider} from '../../providers/newsletter-provider/newsletter-provider';
import {NewsletterViewerPage} from '../../pages/newsletter-viewer/newsletter-viewer';
import {CardImageHeader} from '../../components/card-image-header/card-image-header';

/*
  Generated class for the NewsletterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/newsletter/newsletter.html',
  directives: [CardImageHeader]
})
export class NewsletterPage {
  public newsletters: any;
  public style = 'italic';
  
  constructor(public nav: NavController, public newsletterProvider: NewsletterProvider,
   public stringHelper: StringProvider) {
    this.getNewsLetters();
  }
  
  getNewsLetters() {
    this.newsletterProvider.loadNewsLetters()
        .then(data => {
          this.newsletters = data;
        });
  }
  
  gotoNewsletter(data) {
    this.nav.push(NewsletterViewerPage, data);
  }
}
