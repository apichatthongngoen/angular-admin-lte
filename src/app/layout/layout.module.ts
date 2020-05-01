import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { LayoutLoginComponent } from './layout-login/layout-login.component';
import { LayoutContentHeaderComponent } from './layout-content-header/layout-content-header.component';
// import { LayoutComponent } from './layout/layout.component';



@NgModule({
    declarations: [LayoutHeaderComponent, LayoutFooterComponent, LayoutSidebarComponent, LayoutLoginComponent, LayoutContentHeaderComponent],
    imports: [
        CommonModule

    ]
})
export class LayoutModule { }
