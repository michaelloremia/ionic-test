import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the ColumnTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/column-test/column-test.html',
})
export class ColumnTestPage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }
}
