import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from './items.component';
import {ItemsHomeComponent} from './items-home/items-home.component';
import {ItemListComponent} from './item-list/item-list.component';
import {DetailsManagerComponent} from './item-list/details-manager/details-manager.component';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsComponent,
    children: [
      {
        path: '',
        component: ItemsHomeComponent
      },
      {
        path: 'list',
        component: ItemListComponent,
        children: [
          {
            path: 'details/:id',
            component: DetailsManagerComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(
      routes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ItemsRoutingModule { }
