import { AfterViewInit, Directive, ElementRef } from '@angular/core';

declare var $: any;

@Directive({
    selector: '[ngxImageZoom]'
})
export class ImageZoomDirective implements AfterViewInit {

    constructor(private el: ElementRef) {
        console.log('ImageZoomDirective constructor!');
        console.log(el);
    }

    ngAfterViewInit(): void {
        console.log('ImageZoomDirective onInit');
        console.log(this.el);
        if (this.el) {
            $(this.el.nativeElement).zoom({
                on: 'toggle',
                magnify: 2.4
            });
        } else {
            console.log('NativeElement is null');
        }
    }


}
