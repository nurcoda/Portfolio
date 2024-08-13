import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legalmatters',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './legalmatters.component.html',
  styleUrl: './legalmatters.component.scss'
})
export class LegalmattersComponent {
  translate = inject(TranslationService)
}
