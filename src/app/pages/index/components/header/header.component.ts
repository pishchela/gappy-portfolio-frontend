import { Component, EventEmitter, Output } from '@angular/core';
import { ScrollToSectionsIndex } from '../../../../core/app.models';

@Component({
  selector: 'happi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public scrollToSections = ScrollToSectionsIndex;
  @Output() scrollIntoView: EventEmitter<ScrollToSectionsIndex> =
    new EventEmitter<ScrollToSectionsIndex>();
}
