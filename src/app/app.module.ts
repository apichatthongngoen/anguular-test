import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminModule } from './admin/admin.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FontAwesomeModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    AdminModule,
    MatMenuModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
