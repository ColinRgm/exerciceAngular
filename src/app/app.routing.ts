import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./page/home-page";
import { PassionPageComponent } from "./page/passion-page";
import { ProfessionalPathPageComponent} from "./page/professional-path-page/professional-path-page.component";
import { PortfolioPageComponent } from "./page/portfolio-page/portfolio-page.component";
import { ContactPageComponent } from "./page/contact-page/contact-page.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'passion', component: PassionPageComponent},
  { path: 'career', component: ProfessionalPathPageComponent},
  { path: 'portfolio', component: PortfolioPageComponent},
  { path: 'contact', component: ContactPageComponent}

]

export const appRoutingModule = RouterModule.forRoot(routes);
