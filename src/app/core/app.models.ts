export interface THEME {
  bgColor: string;
  color: string;
}

export interface DetailSection {
  title: string;
  list: {
    name: string;
    description?: string;
    subDescription?: string;
  }[];
}

export interface Email {
  message: string;
  emailFrom: string;
}

export enum ScrollToSectionsIndex {
  CONTACT = 'contact',
  CASES = 'cases',
  ABOUT_ME = 'about me'
}
