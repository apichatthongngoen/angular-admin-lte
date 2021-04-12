import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { DisplayRoutingModule } from "./display-routing.module";
import { PharmacyDisplayModule } from "./pharmacy-display/pharmacy-display.module";

import { Display1Component } from "./display1/display1.component";
import { Display2Component } from "./display2/display2.component";
import { Display3Component } from "./display3/display3.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [HomeComponent, Display1Component],
  imports: [CommonModule, DisplayRoutingModule, FormsModule, BrowserModule, PharmacyDisplayModule],
})
export class DisplayModule {}
