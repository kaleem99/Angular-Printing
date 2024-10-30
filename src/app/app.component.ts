import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterOutlet],
  template: `
    <main>
      <header class="brand-name">
        <a [routerLink]="['/']">
          <img
            class="brand-logo"
            src="/assets/logo.png"
            alt="logo"
            aria-hidden="true"
          />
        </a>
        <button (click)="toggleMenu()" class="hamburger">
          <!-- Hamburger icon (can be replaced with an icon library) -->
          ☰
        </button>
        <nav [class.show]="isMenuOpen">
          <ul>
            @for(header of headers; track header){
            <li>
              <a (click)="toggleMenu()" [routerLink]="['/', header.toLowerCase()]">{{ header }}</a>
            </li>
            }
          </ul>
        </nav>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Toshiba Printers';
  headers = ['Home', 'Printers', 'About', 'Contact'];
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  trackByHeader(index: number, item: string): string {
    return item;
  }
}
