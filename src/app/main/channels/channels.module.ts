import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from './channels.component';
import {GridViewModule} from '../../shared/components/grid-view/grid-view.module';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [ChannelsComponent],
  imports: [
    CommonModule,
    GridViewModule,
    FlexModule
  ],
  exports: [ChannelsComponent]
})
export class ChannelsModule { }
