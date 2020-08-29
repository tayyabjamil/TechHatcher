import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { WorkDetailComponent } from './workDetail/workDetail.component';
import { ServiceDetailComponent } from './serviceDetail/serviceDetail.component';
import { NewsFeedComponent } from './newsFeed/newsFeed.component';


const routes: Routes = [
  { path: 'technologies', component: TechnologiesComponent},
  { path: 'services', component: ServicesComponent },
  { path: 'service', component: ServiceDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'newsFeed', component: NewsFeedComponent },
  { path: 'work', component: WorkDetailComponent },
  { path: 'works', component: WorksComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

