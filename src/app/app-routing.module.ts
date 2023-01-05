import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/index/index.module').then((m) => m.IndexModule),
    data: {
      animation: 'isLeft'
    }
  },
  {
    path: 'project/:id',
    loadChildren: () =>
      import('./pages/project/project.module').then((m) => m.ProjectModule),
    data: {
      animation: 'isRight'
    }
  },
  {
    path: '404',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
