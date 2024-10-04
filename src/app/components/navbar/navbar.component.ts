import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { AproposComponent } from '../../pages/apropos/apropos.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { ServicesComponent } from '../../pages/services/services.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    HomeComponent,
    AproposComponent,
    ContactComponent,
    ServicesComponent,
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
