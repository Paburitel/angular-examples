import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {PROVIDERS_TABS} from './providers.config';
import {NAVIGATION_ROUTES} from '../../app.config';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {Tab} from '../../../shared/components/tabs/tads.interface';
import {TabsComponent} from '../../../shared/components';
import {Example1Component} from './example-1/example-1.component';
import {Example2Component} from './example-2/example-2.component';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss',
  imports: [
    TabsComponent,
    RouterOutlet
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProvidersComponent {

  public readonly providersTabs = PROVIDERS_TABS;

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public onTabClick({id}: Tab) {
    this.router.navigate([id], {
      relativeTo: this.route.parent
    });
  }
}
