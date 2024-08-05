import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillComponent } from "./myskill/myskill.component";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LandingpageComponent, AboutmeComponent, MyskillComponent, PortfolioComponent, ReferencesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
