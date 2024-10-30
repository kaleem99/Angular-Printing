import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products = [
    {
      name: 'e-STUDIO 330AC/400AC',
      description:
        'Technology for every workplace, delivering advanced functionality, ease of use and peace of mind.',
      link: '/details/1',
      image:
        'https://toshibasa.co.za/wp-content/uploads/330AC_400AC_-award-e1726671269121.webp',
    },
    {
      name: 'e-STUDIO 220CS',
      description:
        'A powerful multifunction printer with modern office features.',
      link: '/details/12',
      image:
        'https://toshibasa.co.za/wp-content/uploads/toshiba-eS220CS_2.webp',
    },
    {
      name: 'e-STUDIO 409S',
      description: 'Takes up less space to get so much more done.',
      link: '/details/6',
      image:
        'https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-409S-3.webp',
    },
    {
      name: 'e-STUDIO 2822AF',
      description:
        'Brings all the applications smaller workgroups need all in one place.',
      link: '/details/7',
      image:
        'https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-2822AF-4.webp',
    },
    {
      name: 'e-STUDIO 2021/2521AC',
      description:
        'A spectacular A3 multifunction printer that every office needs.',
      link: '/details/2',
      image:
        'https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-2020-1.webp',
    },
    {
      name: 'e-STUDIO 6526/7527AC',
      description:
        'A cutting-edge multifunction printer with up to 65 pages per minute output speed.',
      link: '/details/5',
      image:
        'https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-3025AC-1.webp',
    },
  ];
  housingLocationList: HousingLocation[] = [];
  housingLocationList2: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  filteredLocationList2: HousingLocation[] = [];
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.housingLocationList2 = this.housingService.getAllHousingLocations2();

    this.filteredLocationList = this.housingLocationList;
    this.filteredLocationList2 = this.housingLocationList2;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    // this.filteredLocationList = this.housingLocationList.filter(
    //   housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    // );
  }
}
