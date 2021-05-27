import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import {FeedModule} from '../../shared/components/feed/feed.module';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
    declarations: [PeopleComponent],
    exports: [
        PeopleComponent
    ],
  imports: [
    CommonModule,
    FeedModule,
    FlexModule
  ]
})
export class PeopleModule { }
