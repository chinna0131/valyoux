import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { PricingComponent } from './common/pricing/pricing.component';
import { NgMarqueeModule } from 'ng-marquee';
import { ChartListComponent } from './chart-list/chart-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PricingComponent,
    ChartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMarqueeModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
