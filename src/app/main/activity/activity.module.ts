import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';
import {ListViewModule} from '../../shared/components/list-view/list-view.module';
import {FlexModule} from '@angular/flex-layout';
import {ModalDialogModule} from '../../shared/components/modal-dialog/modal-dialog.module';

@NgModule({
  declarations: [ActivityComponent],
  imports: [
    CommonModule,
    ListViewModule,
    FlexModule,
    ModalDialogModule
  ],
  exports: [ActivityComponent]
})
export class ActivityModule { }
