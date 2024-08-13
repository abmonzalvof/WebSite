import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Paths } from '../../Models/paths';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public routes: Array<{name: string, link: string}> = Paths
}
