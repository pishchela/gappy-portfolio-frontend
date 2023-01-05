import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fader]
})
export class AppComponent {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public prepareRoute(outlet: RouterOutlet) {
    // console.warn(outlet?.activatedRouteData);
    return (
      outlet &&
      outlet?.activatedRoute &&
      outlet?.activatedRouteData?.['animation']
    );
  }
}
