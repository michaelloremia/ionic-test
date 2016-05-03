import {Component} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';

/*
  Generated class for the TestComponent component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'test-component',
  templateUrl: 'build/components/test-component/test-component.html',
  directives: [IONIC_DIRECTIVES] // makes all Ionic directives available to your component
})
export class TestComponent {
  text: string;
  constructor() {
    this.text = 'Hello World';
  }
}
