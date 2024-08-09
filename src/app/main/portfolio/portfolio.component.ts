import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = (): void => {
    const skillElements = document.querySelectorAll<HTMLElement>('.myskillarrow');
    const projectElement = document.querySelector('.project-button-container') as HTMLElement;

    // Animation für myskillarrow-Elemente
    skillElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        element.classList.add('zoomInDown');
      }
    });

    // Animation für project-button-container-Element
    if (projectElement) {
      const rect = projectElement.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        projectElement.classList.add('slideInLeft');
        // Optional: Entferne den Event-Listener, wenn die Animation nur einmal abgespielt werden soll
        window.removeEventListener('scroll', this.onScroll);
      }
    }
  }
}


// ngOnInit(): void {
//   window.addEventListener('scroll', this.onScroll);
// }

// onScroll = () => {
//   const elements = document.querySelectorAll<HTMLElement>('.myskillarrow');

//   elements.forEach((element) => {
//     const rect = element.getBoundingClientRect();
//     const windowHeight = window.innerHeight || document.documentElement.clientHeight;

//     if (rect.top <= windowHeight && rect.bottom >= 0) {
//       element.classList.add('zoomInDown');
//     }
//   });
// }

// document.addEventListener('scroll', onScroll);

// onScroll(): void {
//   const element = document.querySelector('.project-button-container') as HTMLElement;

//   if (element) {
//     const rect = element.getBoundingClientRect();
//     const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

//     if (isVisible) {
//       element.classList.add('slideInLeft');
//       // Optional: Entferne den Event-Listener, wenn die Animation nur einmal abgespielt werden soll
//       document.removeEventListener('scroll', onScroll);
//     }
//   }
// }



