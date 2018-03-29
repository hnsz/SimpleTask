import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MainRoutingModule} from './routing/main.routing.module';
import {ItemsModule} from './items/items.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TaskDbService} from './taskdb.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainRoutingModule,
    ItemsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [TaskDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
