import { Component } from '@angular/core';
import { DETAILS } from '../../../../core/app.constants';
import { DetailSection } from '../../../../core/app.models';

@Component({
  selector: 'happi-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  public detailsList: DetailSection[] = DETAILS;

  public isListWithDescription(detail: DetailSection): boolean {
    return !!detail?.list[0]?.subDescription;
  }
}
