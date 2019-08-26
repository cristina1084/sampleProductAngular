import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';

import { CalcService } from './calc.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    EditproductComponent,
    ViewproductComponent,
    DeleteproductComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CalcService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
