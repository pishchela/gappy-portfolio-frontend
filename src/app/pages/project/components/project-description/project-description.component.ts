import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'happi-project-description',
  templateUrl: './project-description.component.html'
})
export class ProjectDescriptionComponent implements OnInit {
  public ngOnInit(): void {
    window?.scrollTo(0, 0);
  }
}
