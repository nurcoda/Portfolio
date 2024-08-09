import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  isCheckboxChecked = false;
  shouldApplyGrey = true;
  mailTest = true;

  updateCheckboxStatus(form: NgForm) {
    if (form.valid) {
      this.isCheckboxChecked = true;
      this.shouldApplyGrey = false; // Entferne 'grey', wenn die Checkbox aktiviert ist
    } else {
      this.isCheckboxChecked = false;
      this.shouldApplyGrey = true;  // Wende 'grey' an, wenn das Formular ungültig ist
    }
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
