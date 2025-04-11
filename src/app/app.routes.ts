import { Routes } from '@angular/router';
import {RoutPathEnum} from '../shared/enums';

export const routes: Routes = [
  {path: RoutPathEnum.Templates,pathMatch: 'full', loadComponent: () => import('./pages/templates/templates.component').then((mod) => mod.TemplatesComponent)},
  {path: RoutPathEnum.Providers, pathMatch: 'full', loadComponent: () => import('./pages/providers/providers.component').then((mod) => mod.ProvidersComponent)},
  {path: '**', redirectTo:RoutPathEnum.Templates}
];
