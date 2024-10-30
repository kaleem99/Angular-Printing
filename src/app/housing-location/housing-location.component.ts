import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="listing">
      <!-- Assuming photo path is available as imageSrc -->
      <img *ngIf="housingLocation.imageSrc" class="listing-photo" [src]="housingLocation.imageSrc" alt="Photo of {{ housingLocation.name }} printer">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-specs">
        {{ housingLocation.specs.printSpeed }} | {{ housingLocation.color ? 'Color' : 'Monochrome' }}
      </p>
      <p class="listing-features">
        Functions: {{ housingLocation.functions.join(', ') }}
      </p>
      <br>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent implements OnInit {
  @Input() housingLocation!: HousingLocation;

  ngOnInit(): void {
    // Code to run on component initialization
    console.log('HousingLocationComponent initialized with:', this.housingLocation);
  }
}