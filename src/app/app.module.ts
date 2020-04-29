import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

// routing
import { LayoutComponent } from './layout/layout/layout.component';

// template
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutSidebarComponent } from './layout/layout-sidebar/layout-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    // LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
