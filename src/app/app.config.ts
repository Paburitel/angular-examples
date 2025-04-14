import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {RoutPathEnum} from '../shared/enums';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

export const NAVIGATION_ROUTES = [
  {
    id: RoutPathEnum.Templates,
    title: 'Templates'
  },
  {
    id: RoutPathEnum.Providers,
    title: 'Providers'
  },
]
