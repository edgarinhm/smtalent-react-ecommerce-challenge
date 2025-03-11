export interface CountryModel {
  name: CountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: Currencies;
  };
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  translations: { [key: string]: Translations };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: number;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: {
    [key: string]: NativeName;
  };
}

type NativeName = {
  official: string;
  common: string;
};

type Currencies = {
  name: string;
  symbol: string;
};

export interface Idd {
  root: string;
  suffixes: string[];
}

type Translations = {
  official: string;
  common: string;
};

export interface Demonyms {
  eng: Demonym;
  fra?: Demonym;
}

type Demonym = {
  f: string;
  m: string;
};

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Car {
  signs?: string[];
  side: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface PostalCode {
  format: string;
  regex?: string;
}
