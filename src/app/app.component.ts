import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './main/landingpage/landingpage.component';
import { MainComponent } from './main/main.component';
import { MyskillComponent } from './main/myskill/myskill.component';
import { HeaderComponent } from "../assets/shared/header/header.component";
import { FooterComponent } from "../assets/shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingpageComponent, MainComponent, MyskillComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PortMailo';
}
