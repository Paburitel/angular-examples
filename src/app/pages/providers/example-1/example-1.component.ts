import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-example-1',
  imports: [],
  templateUrl: './example-1.component.html',
  styleUrl: './example-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class Example1Component {

}
