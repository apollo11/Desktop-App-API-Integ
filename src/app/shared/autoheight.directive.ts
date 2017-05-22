import { Directive, 
         HostListener, 
         ElementRef, 
         Renderer, 
        } from '@angular/core';

@Directive({
    selector: '[autoheight]'
})

export class AutoHeightDirective {

    constructor(
        public el: ElementRef, 
        public renderer: Renderer
    ) {}

    changeHeight() {
        // console.log(this.el.nativeElement.offsetHeight);
        this.renderer.setElementAttribute(this.el.nativeElement, 'height', null);
        this.renderer.setElementStyle(this.el.nativeElement, 'height', this.el.nativeElement.offsetHeight + 'px');        
    }

    @HostListener('window:resize', ['$event.target'])
    onResize() {
        this.changeHeight();
    }

    ngOnInit() {
        this.changeHeight();
    }
}