import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import {SocialMediaModule} from '../social-media/social-media.module';
import {NavigationModule} from '../navigation/navigation.module';

@NgModule({
    declarations: [FooterComponent],
    exports: [
        FooterComponent
    ],
  imports: [
    CommonModule,
    SocialMediaModule,
    NavigationModule
  ]
})
export class FooterModule { }
