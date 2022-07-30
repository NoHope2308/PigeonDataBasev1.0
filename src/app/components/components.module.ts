import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselNewComponent } from './carousel-new/carousel-new.component';


@NgModule({
  declarations: [
    CarouselNewComponent
  ],
  imports: [CommonModule],
  exports: [
    CarouselNewComponent
  ],
  bootstrap: []
})
export class ComponentsModule { }
