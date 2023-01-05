import { Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ProjectResolver } from './project.resolver';

export const projectRouting: Routes = [
  {
    path: '',
    component: ProjectComponent,
    resolve: {
      id: ProjectResolver
    }
  }
];
