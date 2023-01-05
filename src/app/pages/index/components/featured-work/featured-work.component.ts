import { Component } from '@angular/core';

enum EFEATURED_WORK_TABS {
  WEBSITES = 'Websites',
  APPS = 'Apps',
  ILLUSTRATION = 'Illustration'
}
const FEATURED_WORK_TABS = [
  EFEATURED_WORK_TABS.WEBSITES,
  EFEATURED_WORK_TABS.APPS,
  EFEATURED_WORK_TABS.ILLUSTRATION
];

export interface FEATURED_ITEM {
  imgSrc: string;
  title: string;
  subtitle: string;
}

const featuredItems: FEATURED_ITEM[] = [
  {
    imgSrc: 'assets/images/featured-work/websites/1.png',
    title: 'Pottery Masters Shop',
    subtitle: 'latest works'
  },
  {
    imgSrc: 'assets/images/featured-work/websites/2.png',
    title: 'Push. cosmetics',
    subtitle: 'latest works'
  },
  {
    imgSrc: 'assets/images/featured-work/websites/3.png',
    title: 'Pottery Masters Shop',
    subtitle: 'latest works'
  },
  {
    imgSrc: 'assets/images/featured-work/websites/4.png',
    title: 'Pottery Masters Shop',
    subtitle: 'latest works'
  },
  {
    imgSrc: 'assets/images/featured-work/websites/5.png',
    title: 'Pottery Masters Shop',
    subtitle: 'latest works'
  },
  {
    imgSrc: 'assets/images/featured-work/websites/6.png',
    title: 'Pottery Masters Shop',
    subtitle: 'latest works'
  }
];

@Component({
  selector: 'happi-featured-work',
  templateUrl: './featured-work.component.html',
  styleUrls: ['./featured-work.component.scss']
})
export class FeaturedWorkComponent {
  public items: FEATURED_ITEM[] = featuredItems;
  public tabs = FEATURED_WORK_TABS;
  public chosenTab: EFEATURED_WORK_TABS = EFEATURED_WORK_TABS.WEBSITES;

  changeTab(tab: EFEATURED_WORK_TABS): void {
    this.chosenTab = tab;
  }
}
