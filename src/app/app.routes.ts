import { Routes } from '@angular/router';
import { HeaderComponent } from '../assets/shared/header/header.component';
import { FooterComponent } from '../assets/shared/footer/footer.component';
import { MainComponent } from './main/main.component';
import { LegalmattersComponent } from './legalmatters/legalmatters.component';

export const routes: Routes = [

    { path: '', component: MainComponent },
    { path: 'legalMatters', component: LegalmattersComponent },

];
