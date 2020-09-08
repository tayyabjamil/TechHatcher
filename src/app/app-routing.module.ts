import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  { path: 'technologies', component: TechnologiesComponent},
  { path: 'services', component: ServicesComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

