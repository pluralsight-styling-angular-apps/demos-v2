import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccordionPaneComponent } from './accordion-pane.component';

@Component({
    selector: 'saa-accordion',
    templateUrl: 'accordion.component.html'
})

export class AccordionComponent {
    @ContentChildren(AccordionPaneComponent) items: QueryList<AccordionPaneComponent>;

    selectItem(item: AccordionPaneComponent) {
        item.active = !item.active;
    }
}
