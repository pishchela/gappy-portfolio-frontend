import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollToSectionsIndex } from '../../core/app.models';

@Component({
  selector: 'happi-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  @ViewChild('contact', { read: ElementRef })
  contactSection!: ElementRef<HTMLElement>;
  @ViewChild('aboutMe', { read: ElementRef })
  aboutMeSection!: ElementRef<HTMLElement>;
  @ViewChild('cases', { read: ElementRef })
  casesSection!: ElementRef<HTMLElement>;

  public scrollTo(sectionName: ScrollToSectionsIndex): void {
    let htmlElement;
    switch (sectionName) {
      case ScrollToSectionsIndex.CASES:
        htmlElement = this.casesSection.nativeElement;
        break;
      case ScrollToSectionsIndex.CONTACT:
        htmlElement = this.contactSection.nativeElement;
        break;
      case ScrollToSectionsIndex.ABOUT_ME:
        htmlElement = this.aboutMeSection.nativeElement;
        break;
      default:
        break;
    }
    htmlElement?.scrollIntoView({ behavior: 'smooth' });
  }
}
