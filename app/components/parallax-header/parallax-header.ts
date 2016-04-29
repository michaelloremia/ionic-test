import {Directive, ElementRef} from 'angular2/core';


/*
  Generated class for the ParallaxHeader directive.

  See https://angular.io/docs/ts/latest/api/core/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[parallax-header]' // Attribute selector
})
export class ParallaxHeader {
  scrollingEl: Element;
  headerEl: Element;
  
  constructor(public el: ElementRef) {
  }
  
  ngOnInit() {
    this.scrollingEl = this.el.nativeElement.children[0];
    this.scrollingEl.addEventListener('scroll', ev => {
      console.log('test scrolling event!');
    });
    console.log('parallax init!');
  }
}
