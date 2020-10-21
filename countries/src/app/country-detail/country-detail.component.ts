import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService  }  from '../../services/country.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country: Country;
  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location,
    ) { }

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.countryService.getCountry(code).subscribe(country => this.country = country);;    
  }

  goBack(): void {
    this.location.back();
  }
}
