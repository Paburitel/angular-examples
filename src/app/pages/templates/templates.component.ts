import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TEMPLATES_DATA_1, TEMPLATES_DATA_2} from './templates.config';
import {ListExComponent, ListItem} from '../../../shared/components';
import {ListItemContentDirective} from '../../../shared/components/list-ex/list-ex.directive';

@Component({
  selector: 'app-templates',
  imports: [ListExComponent, ListItemContentDirective],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplatesComponent {
  public items: ListItem[][] = [TEMPLATES_DATA_1, TEMPLATES_DATA_2];

  protected readonly name = name;
}
