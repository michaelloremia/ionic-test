import {Page, NavController} from 'ionic-angular';
import {NewsletterProvider} from '../../providers/newsletter-provider/newsletter-provider';

/*
  Generated class for the ContactsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/contacts/contacts.html',
})
export class ContactsPage {
  public contacts: any;
  
  constructor(public nav: NavController, public newsletterProvider: NewsletterProvider) {
    this.newsletterProvider.loadContacts()
      .then(data => {
        this.contacts = data;
      });
  }
}