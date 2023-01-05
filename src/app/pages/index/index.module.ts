import { NgModule } from '@angular/core';
import { FeaturedWorkComponent } from './components/featured-work/featured-work.component';
import { IndexComponent } from './index.component';
import { indexRoutes } from './index.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/components/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './components/details/details.component';
import { CommonModule } from '@angular/common';
import { FeaturedWorkItemsComponent } from './components/featured-work/featured-work-items/featured-work-items.component';

@NgModule({
  declarations: [
    FeaturedWorkComponent,
    IndexComponent,
    HeaderComponent,
    DetailsComponent,
    FeaturedWorkItemsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(indexRoutes), SharedModule],
  providers: []
})
export class IndexModule {}
