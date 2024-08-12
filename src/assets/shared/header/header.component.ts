import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../app/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, TranslateModul],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  translate = inject(TranslationService)

  isOpen: boolean = false;

  toggleNav() {
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }

}
