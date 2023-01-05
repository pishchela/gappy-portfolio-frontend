import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';
import { notFoundRoutes } from './not-found.routing';
import { SharedModule } from '../../shared/components/shared.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterModule.forChild(notFoundRoutes), SharedModule]
})
export class NotFoundModule {}
