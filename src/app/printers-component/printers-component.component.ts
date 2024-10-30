import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-printers-component',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './printers-component.component.html',
  styleUrl: './printers-component.component.css',
})
export class PrintersComponentComponent {
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
