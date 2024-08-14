import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../app/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationEnd, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translate = inject(TranslationService)
  router = inject(Router);

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlFragment = this.router.parseUrl(this.router.url).fragment;
        if (!urlFragment) {
          window.scrollTo(0, 0);
        }
      }
    });
  }
}
