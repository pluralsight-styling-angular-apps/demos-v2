import { Component, Input } from '@angular/core';

@Component({
  selector: 'saa-pills',
  templateUrl: 'pills.component.html',
  styleUrls: ['pills.component.scss']
})

export class PillsComponent {
    @Input() pills;
    selectedPill: string;

    togglePill(pill) {
        this.selectedPill = pill;
    }

}