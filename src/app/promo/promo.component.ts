import { AfterContentInit, Component, ElementRef } from '@angular/core';

@Component({
    selector: 'saa-promo',
    templateUrl: './promo.component.html',
    styleUrls: ['./promo.component.scss']
})

export class PromoComponent implements AfterContentInit {
    isColor01 = false;

    constructor(private hostRef: ElementRef) {}

    ngAfterContentInit(): void {
        this.isColor01 = this.hostRef.nativeElement.classList.contains('color--01');
    }
}
