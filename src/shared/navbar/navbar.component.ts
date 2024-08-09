import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public routes: Array<{name: string, link: string}> = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About me',
      link: '/about'
    },
    {
      name: 'Certifications',
      link: '/cert'
    },
    {
      name: 'Experience',
      link: '/exp'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ]
}
