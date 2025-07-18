import { Routes } from '@angular/router';
import {RoutPathEnum} from '../shared/enums';

export const routes: Routes = [
  {path: RoutPathEnum.Templates, pathMatch: 'full',   title: 'Templates', loadComponent: () => import('./pages/templates/templates.component').then((mod) => mod.TemplatesComponent)},
  {path: RoutPathEnum.Providers, title: 'Providers', loadChildren: () => import('./pages/providers/providers.routes').then((mod) => mod.routes)},
  {path: RoutPathEnum.Observable, title: 'Observable', loadComponent: () => import('./pages/observable/observable.component').then((mod) => mod.ObservableComponent)},
  {path: '**', redirectTo: RoutPathEnum.Templates}
];
