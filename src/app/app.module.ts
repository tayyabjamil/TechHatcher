import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';

import { DuThemeModule } from './du-theme/du-theme.module';

import { AppComponent } from './app.component';
import { PortfolioHightlightComponent } from './home/portfolioHighlight';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ContactComponent,
      TechnologiesComponent,
      ServicesComponent,
      AboutComponent,

      PortfolioHightlightComponent,

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
