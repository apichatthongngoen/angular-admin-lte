import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { DisplayModule } from './display/display.module';


// routing
import { LayoutComponent } from './layout/layout/layout.component';

// template
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutSidebarComponent } from './layout/layout-sidebar/layout-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Display1Component } from './display/display1/display1.component';
import { Display2Component } from './display/display2/display2.component';
import { Display3Component } from './display/display3/display3.component';
// import { LayoutModule } from './layout/layout.module';

registerLocaleData(localeEn, 'en');

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    Display1Component,
    Display2Component,
    Display3Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    DisplayModule
    // LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
