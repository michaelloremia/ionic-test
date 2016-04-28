import {Directive, ElementRef} from 'angular2/core';

/*
  Generated class for the HeaderShrink directive.

  See https://angular.io/docs/ts/latest/api/core/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[header-shrink]', // Attribute selector
  host: {
    '(click)': 'scrollEvent()'
  }
})
export class HeaderShrink {
  public el: ElementRef;
  public scrollEl: Element;
  
  constructor(el: ElementRef) {
    console.log('hello');
    this.el = el;
  }
  
  scrollEvent() {
    console.log('scroll event triggered!');
  }
  ngOnInit() {
    console.log('begin!');
    this.scrollEl = this.el.nativeElement.children[0]
    this.scrollEl.addEventListener('scroll', this.scrollEvent);
  }
}
