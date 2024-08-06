import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  ngAfterViewInit() {
    const slideElement = document.getElementById('slide');

    if (slideElement) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            slideElement.style.animation = 'slide 0.5s forwards';
            observer.unobserve(slideElement); // Animation nur einmal ausführen
          }
        });
      });

      observer.observe(slideElement);
    }
  }

}
