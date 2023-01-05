import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { ProjectService } from '../../core/services/project.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolver implements Resolve<string> {
  constructor(private _projectService: ProjectService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    // TODO: make resolver to return project from HTTP;
    const id = route.paramMap.get('id');

    if (id) {
      return id;
    } else {
      return EMPTY;
    }
  }
}
