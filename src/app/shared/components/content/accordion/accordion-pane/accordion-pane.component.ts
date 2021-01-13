import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'saa-accordion-pane',
    templateUrl: './accordion-pane.component.html',
    styleUrls: ['./accordion-pane.component.scss']
})

export class AccordionPaneComponent {
    @ViewChild(TemplateRef, { static: true }) template: TemplateRef<unknown>;
    @Input() title: string;
}
