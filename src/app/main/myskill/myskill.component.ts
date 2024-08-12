import { Component, OnInit, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-myskill',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './myskill.component.html',
  styleUrl: './myskill.component.scss'
})

export class MyskillComponent implements OnInit {

  translate = inject(TranslationService)

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
