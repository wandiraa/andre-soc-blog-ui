import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FlexModule } from '@angular/flex-layout';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalVideoModule } from '../modal-video/modal-video.module';
import { ModalPeopleModule } from '../modal-people/modal-people.module';
import { ModalDocumentModule } from '../modal-document/modal-document.module';

@NgModule({
  declarations: [FeedComponent],
  exports: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    NgxYoutubePlayerModule.forRoot(),
    MatDialogModule,
    ModalVideoModule,
    ModalPeopleModule,
    ModalDocumentModule
  ]
})
export class FeedModule { }
