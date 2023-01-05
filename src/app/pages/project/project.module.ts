import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/components/shared.module';
import { projectRouting } from './project.routing';
import { ProjectDescriptionComponent } from './components/project-description/project-description.component';

@NgModule({
  declarations: [ProjectComponent, ProjectDescriptionComponent],
  imports: [RouterModule.forChild(projectRouting), SharedModule]
})
export class ProjectModule {}
