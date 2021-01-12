import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/countries.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country: Country;
  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('alphaCode');

    this.countriesService.getCountryByAlpha(identifier).subscribe(country => {
      if (!country) {
        return this.router.navigateByUrl('/');
      }
      this.country = country;
      console.log('Country -->', country);
    });
  }
}
