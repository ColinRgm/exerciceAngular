import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/* Routing
              Use for multiple pages website
 */
import {appRoutingModule} from "./app.routing";

/* ------------------------------------------------------ Pages ------------------------------------------------------ */
/* Home page */
import { HomePageComponent } from './page/home-page';

/* Passion page */
import { PassionPageComponent } from './page/passion-page';

/* Contact page */
import { ContactPageComponent } from './page/contact-page/contact-page.component';

/* Portfolio page */
import { PortfolioPageComponent } from './page/portfolio-page/portfolio-page.component';

/* Career page */
import { ProfessionalPathPageComponent } from './page/professional-path-page/professional-path-page.component';

/* --------------------------------------------------- Components --------------------------------------------------- */



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PassionPageComponent,
    ContactPageComponent,
    PortfolioPageComponent,
    ProfessionalPathPageComponent,
  ],


  imports: [
    BrowserModule,
    appRoutingModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
