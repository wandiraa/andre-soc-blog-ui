import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FlexModule} from '@angular/flex-layout';
import {ListViewModule} from '../../shared/components/list-view/list-view.module';
import {GridViewModule} from '../../shared/components/grid-view/grid-view.module';
import {ActivityModule} from '../activity/activity.module';
import {ChannelsModule} from '../channels/channels.module';
import {VideoModule} from '../video/video.module';
import {PeopleModule} from '../people/people.module';
import {DocumentsModule} from '../documents/documents.module';


@NgModule({
    declarations: [HomeComponent],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FlexModule,
        ListViewModule,
        GridViewModule,
        ActivityModule,
        ChannelsModule,
        VideoModule,
        PeopleModule,
        DocumentsModule
    ]
})
export class HomeModule { }
