import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeEn from "@angular/common/locales/en";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// import { BugService } from "./shared/bug.service";
import { GetDataServiceService } from "./shared/get-data-service.service";
// import { GetKPHSMartCardReader } from './shared/KPHSMartCardReader';

// routing
import { DisplayModule } from "./display/display.module";
import { PagesModule } from "./pages/pages.module";
// import { LayoutModule } from "./layout/layout.module";

// template
import { LayoutFooterComponent } from "./layout/layout-footer/layout-footer.component";
import { LayoutHeaderComponent } from "./layout/layout-header/layout-header.component";
import { LayoutLoginComponent } from "./layout/layout-login/layout-login.component";
import { LayoutComponent } from "./layout/layout/layout.component";
import { LayoutSidebarComponent } from "./layout/layout-sidebar/layout-sidebar.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { Display1Component } from "./display/display1/display1.component";
// import { Display2Component } from "./display/display2/display2.component";
// import { Display3Component } from "./display/display3/display3.component";

registerLocaleData(localeEn, "en");

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutComponent,
    LayoutLoginComponent,
    LayoutSidebarComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, DisplayModule, PagesModule, NgbModule],
  providers: [GetDataServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
