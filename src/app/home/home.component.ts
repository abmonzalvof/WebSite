import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PathsPipe } from '../../Pipes/paths.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, PathsPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
