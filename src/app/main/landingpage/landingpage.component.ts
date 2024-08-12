import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../assets/shared/header/header.component';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [HeaderComponent, TranslateModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  translate = inject(TranslationService)
}
