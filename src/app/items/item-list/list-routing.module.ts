import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {DetailsManagerComponent} from './details-manager/details-manager.component';
import {ItemListComponent} from './item-list.component';

const routes: Routes = [
  {
        path: 'list',
        component: ItemListComponent,
        children: [
          {
            path: 'fork',
            component: DetailsManagerComponent
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
export class ListRoutingModule { }
