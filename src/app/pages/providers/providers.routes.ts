import {Routes} from '@angular/router';
import {ProvidersRouteEnum} from './prociders.enum';
import {ProvidersComponent} from './providers.component';
import {Example1Component} from './example-1/example-1.component';
import {Example2Component} from './example-2/example-2.component';

export const routes: Routes =
  [
    {
      path: '',
      title: 'Providers',
      component: ProvidersComponent,
      children: [
        {
        path: ProvidersRouteEnum.Example1,
        component: Example1Component
      },
      {
        path: ProvidersRouteEnum.Example2,
        component: Example2Component
      }]

    },
    {path: '**', redirectTo: ''}
  ];

