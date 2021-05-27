import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media.component';
import {FlexModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [SocialMediaComponent],
  imports: [
    CommonModule,
    FlexModule,
    RouterModule
  ],
  exports: [SocialMediaComponent]
})
export class SocialMediaModule { }
