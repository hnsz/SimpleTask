import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemsRoutingModule} from './items-routing.module';
import {ItemsComponent} from './items.component';
import { ItemsHomeComponent } from './items-home/items-home.component';
import {ItemListModule} from './item-list/item-list.module';

@NgModule({
  imports: [
    CommonModule,
    ItemListModule,
    ItemsRoutingModule,
  ],
  declarations: [
    ItemsComponent,
    ItemsHomeComponent,
  ]

})
export class ItemsModule { }
