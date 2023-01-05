import { Component, Input } from '@angular/core';
import { FEATURED_ITEM } from '../featured-work.component';

@Component({
  selector: 'happi-featured-work-items',
  templateUrl: './featured-work-items.component.html',
  styleUrls: ['./featured-work-items.component.scss']
})
export class FeaturedWorkItemsComponent {
  @Input() public items: FEATURED_ITEM[] = [];
}
