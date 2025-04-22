import {AfterViewInit, ContentChild, Directive, ElementRef, Input, TemplateRef} from "@angular/core";

@Directive({
  selector: 'list-item-directive, [listItemDirective]',
  standalone: true
})
export class ListItemContentDirective implements AfterViewInit {
  @ContentChild(TemplateRef, { read: TemplateRef }) public template: TemplateRef<HTMLElement>;

  @Input() public prefix: string;

  constructor(private elementRef: ElementRef) {
  }

  public ngAfterViewInit() {
    // console.log('TEMPLATE', this.template);
    // console.log('ELEMENT REF', this.elementRef);
  }
}
