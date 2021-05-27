import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import {FlexModule} from '@angular/flex-layout';
import {FeedModule} from '../../shared/components/feed/feed.module';



@NgModule({
    declarations: [VideoComponent],
    exports: [
        VideoComponent
    ],
    imports: [
        CommonModule,
        FlexModule,
        FeedModule
    ]
})
export class VideoModule { }
