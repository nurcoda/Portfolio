import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillComponent } from "./myskill/myskill.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LandingpageComponent, AboutmeComponent, MyskillComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
