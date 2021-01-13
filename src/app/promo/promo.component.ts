import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'saa-promo',
    templateUrl: './promo.component.html',
    styleUrls: ['./promo.component.scss']
})

export class PromoComponent {
    themeClassNames: string[] = [];
    isColor01 = false;

    constructor(private hostRef: ElementRef) {}

    ngAfterContentInit() {
        this.themeClassNames = this.hostRef.nativeElement.className.split(' ');
        this.isColor01 = this.themeClassNames.indexOf('color--01') > -1;
    }
}
