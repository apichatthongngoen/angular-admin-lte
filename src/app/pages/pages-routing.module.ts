import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout/layout.component';
import { MoneyComponent } from './money/money.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoneyQueueComponent } from './money-queue/money-queue.component';
import { PrintPharmacyMinComponent } from './pharmacy/print-pharmacy/print-pharmacy-min/print-pharmacy-min.component';

const routes: Routes = [
    {
        path: 'admin',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'admin', component: MoneyComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'money-queue', component: MoneyQueueComponent },
            { path: 'pharmacy-printt', component: PrintPharmacyMinComponent },
        ]
    },
    {
        path: '**', redirectTo: '/404'
    }

]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }