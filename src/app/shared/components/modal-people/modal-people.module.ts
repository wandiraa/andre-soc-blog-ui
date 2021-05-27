import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPeopleComponent } from './modal-people.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FileAttachmentModule } from '../file-attachment/file-attachment.module';

@NgModule({
  declarations: [ModalPeopleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FileAttachmentModule
  ],
  entryComponents: [ModalPeopleComponent]
})
export class ModalPeopleModule { }
