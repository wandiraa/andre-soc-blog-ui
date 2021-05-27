import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FileAttachmentComponent } from './file-attachment.component';

@NgModule({
  declarations: [FileAttachmentComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [FileAttachmentComponent],
  entryComponents: [FileAttachmentComponent]
})
export class FileAttachmentModule { }
