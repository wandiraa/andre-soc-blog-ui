import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';
import {FeedModule} from '../../shared/components/feed/feed.module';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
    declarations: [DocumentsComponent],
    exports: [
        DocumentsComponent
    ],
  imports: [
    CommonModule,
    FeedModule,
    FlexModule
  ]
})
export class DocumentsModule { }
