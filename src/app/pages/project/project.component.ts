import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'happi-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  private _activatedRouteSubscription: Subscription | undefined;
  constructor(private _activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this._activatedRouteSubscription = this._activatedRoute.data.subscribe(
      () => {
        // console.warn(res);
      }
    );
  }
  public ngOnDestroy(): void {
    this._activatedRouteSubscription?.unsubscribe();
  }
}
