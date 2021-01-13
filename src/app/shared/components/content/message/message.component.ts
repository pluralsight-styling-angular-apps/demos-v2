import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
    selector: 'saa-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})

export class MessageComponent implements AfterContentInit {
    @ContentChild('messageContent') messageContent: ElementRef;
    isLayout01 = false;

    constructor(private hostRef: ElementRef) {}

    ngAfterContentInit(): void {
        this.isLayout01 = this.hostRef.nativeElement.classList.contains('layout--01');
    }
}
