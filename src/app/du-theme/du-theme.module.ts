import { BadgesComponent } from './components/badges/badges.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, UpperFooterComponent, FooterComponent, ButtonComponent, HeadingDescComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, HeaderComponent, UpperFooterComponent, ButtonComponent, HeadingDescComponent, BadgesComponent],
  exports: [FooterComponent, HeaderComponent, UpperFooterComponent, ButtonComponent, HeadingDescComponent, BadgesComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DuThemeModule { }
