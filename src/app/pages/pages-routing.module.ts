import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout/layout.component';
import { MoneyComponent } from './money/money.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoneyQueueComponent } from './money-queue/money-queue.component';

const routes: Routes = [
    {
        path: 'admin',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'admin', component: MoneyComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'money-queue', component: MoneyQueueComponent },

        ]

    }

]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }