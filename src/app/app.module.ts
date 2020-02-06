import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TickerComponent } from './ticker/ticker.component';
import { MarketDirectionDirective } from './market-direction.directive';
import { TemptickerComponent } from './ticker/tempticker/tempticker.component';
import { ViewTickerComponent } from './ticker/view-ticker/view-ticker.component';

@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    MarketDirectionDirective,
    TemptickerComponent,
    ViewTickerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
