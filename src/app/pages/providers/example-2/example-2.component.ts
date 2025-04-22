import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-example-2',
  imports: [],
  templateUrl: './example-2.component.html',
  styleUrl: './example-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class Example2Component {

}
