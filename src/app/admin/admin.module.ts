import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ContentComponent } from './content/content.component';
// เมนู
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MoneyQueueComponent } from './money/money-queue/money-queue.component';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
    imports: [
        AdminRoutingModule,
        CommonModule,
        MatExpansionModule,
        MatTableModule,
        MatCardModule,
        MatCheckboxModule,
        MatGridListModule
    ],
    providers: [],
    declarations: [ContentComponent, MoneyQueueComponent]

})
export class AdminModule { }
