import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { WorkDetailComponent } from './workDetail/workDetail.component';
import { DuThemeModule } from './du-theme/du-theme.module';
import { ServiceDetailComponent } from './serviceDetail/serviceDetail.component';
import { AppComponent } from './app.component';
import { PortfolioHightlightComponent } from './home/portfolioHighlight';
import { NewsFeedComponent } from './newsFeed/newsFeed.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ContactComponent,
      TechnologiesComponent,
      ServicesComponent,
      AboutComponent,
      WorksComponent,
      WorkDetailComponent,
      ServiceDetailComponent,
      PortfolioHightlightComponent,
      NewsFeedComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      DuThemeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
