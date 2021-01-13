import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'saa-promo',
    templateUrl: './promo.component.html',
    styleUrls: ['./promo.component.scss']
})

export class PromoComponent {
    isColor01 = false;

    constructor(private hostRef: ElementRef) {}

    ngAfterContentInit() {
        this.isColor01 = this.hostRef.nativeElement.classList.contains('color--01');
    }
}
