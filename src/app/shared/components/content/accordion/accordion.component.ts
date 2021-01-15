import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccordionPaneComponent } from './accordion-pane/accordion-pane.component';

@Component({
    selector: 'saa-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent {
    @ContentChildren(AccordionPaneComponent) items: QueryList<AccordionPaneComponent>;
    activeIndex: number;

    selectItem(index: number): void {
        this.activeIndex = this.activeIndex != index ?  index : null; 
    }
}
