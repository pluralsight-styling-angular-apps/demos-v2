import { Component, Directive } from '@angular/core';

@Directive({ selector: 'saa-tooltip-message' })
export class TooltipMessageDirective {}

@Component({
    selector: 'saa-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})

export class ToolTipComponent { }
