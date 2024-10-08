import { Component, OnInit, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  translate = inject(TranslationService)

  private slideInLeftPlayed = false;
  private slideInRightPlayed = false;

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = (): void => {
    const skillElements = document.querySelectorAll<HTMLElement>('.myskillarrow');

    skillElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        element.classList.add('zoomInDown');
      }
    });


    const projectElement = document.querySelector('.project-button-container') as HTMLElement;
    if (projectElement && !this.slideInLeftPlayed) {
      const rect = projectElement.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        projectElement.classList.add('slideInLeft');
        this.slideInLeftPlayed = true;
      }
    }

    const projectElementTwo = document.querySelector('.project-button-container-two') as HTMLElement;
    if (projectElementTwo && !this.slideInRightPlayed) {
      const rect = projectElementTwo.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        projectElementTwo.classList.add('slideInRight');
        this.slideInRightPlayed = true;
      }
    }

    if (this.slideInLeftPlayed && this.slideInRightPlayed) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

}