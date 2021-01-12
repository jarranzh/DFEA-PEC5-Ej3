export interface Country {
  name: string;
  alpha3Code: string;
  capital: string;
  languages: Language[];
  currencies: Currency[];
  flag: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}
