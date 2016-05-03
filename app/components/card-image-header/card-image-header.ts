import {Component, Directive, Input} from 'angular2/core';

@Component({
  selector: "card-image-header",
  templateUrl: 'build/components/card-image-header/card-image-header.html',
  inputs: ['img']
})
export class CardImageHeader {
  public img: String;
  
  constructor() {
  }
}