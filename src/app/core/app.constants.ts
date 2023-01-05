import { DetailSection, THEME } from './app.models';

export const THEME_ARRAY: THEME[] = [
  {
    bgColor: '#322916',
    color: '#D8A8B2'
  },
  {
    bgColor: '#F3D5AF',
    color: '#7D5199'
  },
  {
    bgColor: '#265B3A',
    color: '#DBCF3A'
  },
  {
    bgColor: '#EACEE3',
    color: '#E05125'
  },
  {
    bgColor: '#7B529B',
    color: '#FFB85E'
  },
  {
    bgColor: '#9A5311',
    color: '#E2D54B'
  },
  {
    bgColor: '#4C6335',
    color: '#D5C2F2'
  }
];

export const DETAILS: DetailSection[] = [
  {
    title: 'Location',
    list: [
      {
        name: 'Philadelphia. PA'
      }
    ]
  },
  {
    title: 'Skills',
    list: [
      {
        name: 'UX/UI'
      },
      {
        name: 'Websites'
      },
      {
        name: 'Interfaces'
      },
      {
        name: 'Illustration'
      }
    ]
  },
  {
    title: 'Tools',
    list: [
      {
        name: 'Figma'
      },
      {
        name: 'Illustrator'
      },
      {
        name: 'Procreate'
      }
    ]
  },
  {
    title: 'Education',
    list: [
      {
        name: 'Feb - May 2021',
        description: 'Course in Illustration',
        subDescription: 'SKVOT'
      },
      {
        name: 'Sep - May 2021',
        description: 'Masters in UX Design, Not ended',
        subDescription: 'Poznan, Collegium DaVinci'
      },
      {
        name: 'Jun - Dec 2019',
        description: 'Course in Webdesign',
        subDescription: 'Chernihiv, Beetroot Academy'
      },
      {
        name: 'Sep 2017 - Jul 2020',
        description: 'Bachelor in Computer Science',
        subDescription: 'Chernihiv Polytechnic National University'
      }
    ]
  },
  {
    title: 'Work',
    list: [
      {
        name: 'Aug 2021 - Now',
        description: 'UI Designer',
        subDescription: 'Lazarev. — Product Design Agency'
      },
      {
        name: '2019 - Aug 2021',
        description: 'UI/Web Designer',
        subDescription: 'Freelancer'
      },
      {
        name: 'Sep 2018 - Sep 2019',
        description: 'Web Designer',
        subDescription: 'Transparen Agency'
      }
    ]
  }
];
