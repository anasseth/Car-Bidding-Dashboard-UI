import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CircleProgressComponent } from './layout/circle-progress/circle-progress.component'
import { DialogOverviewExampleDialog, HomeComponent } from './home/home.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CircleProgressComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 28,
      showSubtitle: false,
      outerStrokeWidth: 4,
      innerStrokeWidth: 2,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      titleFontSize: "14"
    }),
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
