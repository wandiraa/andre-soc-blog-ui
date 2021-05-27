import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationModule } from '../navigation/navigation.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ModalVideoModule } from '../modal-video/modal-video.module';

@NgModule({
  declarations: [HeadersComponent],
    imports: [
      CommonModule,
      FlexLayoutModule,
      NavigationModule,
      ReactiveFormsModule,
      MatAutocompleteModule,
      ModalVideoModule
    ],
  exports: [HeadersComponent]
})
export class HeadersModule { }
