import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }

  getCountryByAlpha(alphaCode: string): Observable<Country> {
    return this.http.get<Country>(
      'https://restcountries.eu/rest/v2/alpha/' + alphaCode
    );
  }
}
