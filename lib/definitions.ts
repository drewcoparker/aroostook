import { HOUSE_OF_REPRESENTATIVES, SENATE } from '@/lib/constants';

// export interface Member {
//   address: string;
//   bioguideid: string;
//   birthyear: string;
//   chamber: typeof HOUSE_OF_REPRESENTATIVES | typeof SENATE;
//   cosponsorelegislationcount: number;
//   currentember: boolean;
//   directordername: string;
//   district: number;
//   firstname: string;
//   honorificname: string;
//   imageurl: string;
//   invertedordername: string;
//   lastname: string;
//   middlename: string;
//   officialwebsiteurl: string;
//   partyabbreviation: string;
//   partyname: string;
//   phonenumber: string;
//   sponsoredlegislationcount: number;
//   state: string;
//   termcount: number;
// }

export interface Member {
  address?: string;
  bioguideid: string;
  birthyear?: string;
  chamber: typeof HOUSE_OF_REPRESENTATIVES | typeof SENATE;
  cosponsoredlegislationcount?: number;
  currentmember?: boolean;
  directordername?: string;
  district?: number;
  firstname?: string;
  honorificname?: string;
  imageurl?: string;
  invertedordername?: string;
  lastname?: string;
  middlename?: string;
  officialwebsiteurl?: string;
  partyabbreviation?: string;
  partyname?: string;
  phonenumber?: string;
  sponsoredlegislationcount?: number;
  state: string;
  termcount?: number;
}

export interface StateRepresentation {
  representatives: Member[];
  senators: Member[];
}

export interface StateRepresentations {
  [state: string]: StateRepresentation;
}

export const usStates = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'American Samoa',
  'Guam',
  'Northern Mariana Islands',
  'Puerto Rico',
  'U.S. Virgin Islands',
  'District of Columbia',
];
