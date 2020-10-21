import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries : Observable<Country[]>; 
  url: string = 'https://restcountries.eu/rest/v2/all';
  error;
  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {     
    return this.http.get<Country[]>(this.url);
  }
}
