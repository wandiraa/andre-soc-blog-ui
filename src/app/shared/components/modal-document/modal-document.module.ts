import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDocumentComponent } from './modal-document.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FileAttachmentModule } from '../file-attachment/file-attachment.module';

@NgModule({
  declarations: [ModalDocumentComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    FileAttachmentModule
  ],
  entryComponents: [ModalDocumentComponent]
})
export class ModalDocumentModule { }
