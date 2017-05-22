import { NgModule } from '@angular/core';

import { AutoHeightDirective } from './autoheight.directive';
import { SlickSliderComponent } from '../elements/carousel/carousel.component';

@NgModule({
    declarations: [
        AutoHeightDirective,
        SlickSliderComponent
    ],
    exports: [
        AutoHeightDirective,
        SlickSliderComponent
    ]
})

export class SharedModule{}