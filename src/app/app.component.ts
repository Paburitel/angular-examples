import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TabsComponent} from '../shared/components';
import {NAVIGATION_ROUTES} from './app.config';
import {Tab} from '../shared/components/tabs/tads.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabsComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public navigationItems = NAVIGATION_ROUTES;
  private readonly router = inject(Router)

  public onTabClick({id}: Tab) {
    this.router.navigate([id]);
  }
}
