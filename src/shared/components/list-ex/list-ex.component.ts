import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  input,
  InputSignal,
  TemplateRef
} from '@angular/core';
import {ListItemContentDirective} from './list-ex.directive';
import {NgTemplateOutlet} from '@angular/common';

export interface ListItem  {
  id: string,
  name: string
}

@Component({
  selector: 'app-list-ex',
  templateUrl: './list-ex.component.html',
  styleUrl: './list-ex.component.scss',
  imports: [
    NgTemplateOutlet
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListExComponent implements AfterViewInit  {

  @ContentChild(ListItemContentDirective, { read: TemplateRef }) itemTemplate: TemplateRef<HTMLElement>;
  @ContentChild(ListItemContentDirective) itemTemplateRef: ListItemContentDirective;
  @ContentChild('itemTemplateConst', { read: TemplateRef }) itemTemplateConst: TemplateRef<HTMLElement>;

  public items: InputSignal<ListItem[]> = input<ListItem[]>([]);
  public itemInputTemplate = input<TemplateRef<any>>();

  public ngAfterViewInit() {
    console.log('IN COMPONENT');
    console.log('itemTemplate', this.itemTemplate);
    console.log('itemTemplateRef', this.itemTemplateRef);
  }

}
