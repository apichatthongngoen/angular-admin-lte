import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PharmacyDisplayRoutingModule } from "./pharmacy-display-routing.module";
import { DisplayMainComponent } from "./display-main/display-main.component";

@NgModule({
  declarations: [DisplayMainComponent],
  imports: [CommonModule, PharmacyDisplayRoutingModule],
})
export class PharmacyDisplayModule {}
