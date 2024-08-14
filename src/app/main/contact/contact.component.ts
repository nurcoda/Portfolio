import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  translate = inject(TranslationService)
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  isCheckboxChecked = false;
  shouldApplyGrey = false;
  isFormSent = false;
  mailTest = false;

  updateCheckboxStatus(form: NgForm) {
    if (form.valid) {
      this.isCheckboxChecked = true;
      this.shouldApplyGrey = true; // Entferne 'grey', wenn die Checkbox aktiviert ist
    } else {
      this.isCheckboxChecked = false;
      this.shouldApplyGrey = false;  // Wende 'grey' an, wenn das Formular ungültig ist
    }
  }

  userFeedback() {
    this.isFormSent = true;
    setTimeout(() => {
      this.isFormSent = false;
    }, 3000);
  }

  post = {
    endPoint: 'https://mailo-mittelstaedt.de//sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.userFeedback();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

}
