  
import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
    selector: 'saa-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})

export class MessageComponent {
    @ContentChild('messageContent') messageContent: ElementRef;
}
