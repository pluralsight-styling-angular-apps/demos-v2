  
import { Component, ContentChild, Directive, ElementRef } from '@angular/core';

@Directive({ selector: 'saa-message-title' })
export class MessageTitleDirective {}

@Directive({ selector: 'saa-message-content' })
export class MessageContentDirective {}

@Component({
    selector: 'saa-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})

export class MessageComponent {
    @ContentChild(MessageContentDirective) messageContent: MessageContentDirective;
}
