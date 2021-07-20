import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UrlResponseCheckComponent } from './url-response-check/url-response-check.component';
import { BigCommSkuListComponent } from './big-comm-sku-list/big-comm-sku-list.component';
import { OtpDBTitleLookupComponent } from './otp-db-title-lookup/otp-db-title-lookup.component';


@NgModule({
  declarations: [
    AppComponent,
    BigCommSkuListComponent,
    UrlResponseCheckComponent,
    OtpDBTitleLookupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
