import { Component } from '@angular/core';
import { FooterComponent } from '../../../assets/shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  onSubmit() {
    console.log(this.contactData)
  }
}
