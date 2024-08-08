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

  onScroll = () => {
    const elements = document.querySelectorAll<HTMLElement>('.myskillarrow');

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        element.classList.add('zoomInDown');
      }
    });
  }

}
