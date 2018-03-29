import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListRoutingModule} from './list-routing.module';
import {DetailsManagerComponent} from './details-manager/details-manager.component';
import {DetailsComponent} from '../details/details.component';
import {ItemListComponent} from './item-list.component';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule
  ],
  declarations: [
    DetailsComponent,
    DetailsManagerComponent,
    ItemListComponent,
  ]
})
export class ItemListModule { }
