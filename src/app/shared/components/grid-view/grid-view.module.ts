import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from './grid-view.component';
import { ItemGridComponent } from './item/item.component';
import { ListGridComponent } from './list/list.component';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
    declarations: [GridViewComponent, ListGridComponent, ItemGridComponent],
    exports: [
        GridViewComponent
    ],
  imports: [
    CommonModule,
    FlexModule
  ]
})
export class GridViewModule { }
