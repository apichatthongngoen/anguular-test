import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
    imports: [
        AdminRoutingModule,
        CommonModule
    ],
    providers: [],
    declarations: [ContentComponent]

})
export class AdminModule { }
