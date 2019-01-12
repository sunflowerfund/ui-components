import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ButtonComponent } from "./@sunflower-module/sunflower-ui/ui-components/button/button.component";
import { DropdownMenuComponent } from "./@sunflower-module/sunflower-ui/ui-components/dropdown-menu/dropdown-menu.component";
import { NavbarComponent } from "./@sunflower-module/sunflower-ui/ui-components/navbar/navbar.component";
import { HomePage } from "./donor-app/pages/home/home.page";
import { MainRoutingModule } from "./donor-app/main.routing.module";
import { ComponentsPage } from "./donor-app/pages/components.page";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DropdownMenuComponent,
    NavbarComponent,
    HomePage,
    ComponentsPage
  ],
  imports: [BrowserModule, MainRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
