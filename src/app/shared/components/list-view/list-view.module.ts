import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [ListViewComponent, ListComponent, ItemComponent],
  imports: [
    CommonModule,
    FlexModule
  ],
  exports: [ListViewComponent, ListComponent, ItemComponent]
})
export class ListViewModule { }
