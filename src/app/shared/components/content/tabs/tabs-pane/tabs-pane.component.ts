import { Component, Input } from '@angular/core';

@Component({
    selector: 'saa-tabs-pane',
    templateUrl: './tabs-pane.component.html',
    styleUrls: ['./tabs-pane.component.scss']
})

export class TabsPaneComponent {
    @Input() title: string;
    @Input() active = false;
}
