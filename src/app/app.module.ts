import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './user/user.module';

import { UserlistComponent } from './userlist/userlist.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomStyleDirective } from './custom-style.directive';
import { CompanyModule } from './company/company.module';
import { SaleModule } from './sale/sale.module';

import { AngularFileUploaderModule } from "angular-file-uploader";
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    CustomStyleDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,FormsModule,
    CompanyModule,
    SaleModule,
    AngularFileUploaderModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
