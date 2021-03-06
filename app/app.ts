import {App, IonicApp, Platform} from 'ionic-angular';
import {Component} from 'angular2/core';
import {NgStyle} from 'angular2/common';
import {StatusBar} from 'ionic-native';
import {GettingStartedPage} from './pages/getting-started/getting-started';
import {ListPage} from './pages/list/list';
import {NewsletterPage} from './pages/newsletter/newsletter';
import {CalendarPage} from './pages/calendar/calendar';
import {ContactsPage} from './pages/contacts/contacts';
import {NewsletterProvider} from './providers/newsletter-provider/newsletter-provider';
import {StringProvider} from './providers/helpers/string-provider';
import {CardImageHeader} from './components/card-image-header/card-image-header';
import {TestComponent} from './components/test-component/test-component';
import {Globals} from './providers/globals/globals';
import * as R from 'ramda';

@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [NewsletterProvider, StringProvider, Globals],
  directives: [CardImageHeader, NgStyle]
})
class MyApp {
  rootPage: any = GettingStartedPage;
  pages: Array<{title: string, component: any}>

  constructor(private app: IonicApp, private platform: Platform, g: Globals) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Getting Started', component: GettingStartedPage },
      { title: 'List', component: ListPage },
      { title: 'Newsletter', component: NewsletterPage},
      { title: 'Calendar page', component: CalendarPage},
      { title: 'Contacts', component: ContactsPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
