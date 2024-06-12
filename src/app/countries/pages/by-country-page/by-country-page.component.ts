import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(public countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;

  }

  public searchCountries(term: string){
    this.isLoading = true;

    this.countriesService.SearchCountry(term)
    .subscribe(countries =>{
      this.countries = countries;
      this.isLoading = false;
    })
  }
}