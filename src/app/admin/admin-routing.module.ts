import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { ContentComponent } from './content/content.component';
import { SideNavComponent } from '../layout/side-nav/side-nav.component';
import { MoneyQueueComponent } from './money/money-queue/money-queue.component';

const routes: Routes = [
    {
        path: 'admin',
        component: SideNavComponent,
        children: [
            { path: '', redirectTo: 'admin', pathMatch: 'full' },
            { path: 'admin', component: ContentComponent },
            { path: 'money', component: MoneyQueueComponent },
        ]


    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
