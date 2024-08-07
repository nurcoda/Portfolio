import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillComponent } from "./myskill/myskill.component";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { FooterComponent } from '../../assets/shared/footer/footer.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LandingpageComponent, AboutmeComponent, MyskillComponent, PortfolioComponent, ReferencesComponent, FooterComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
