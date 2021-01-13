import { Component, Input } from '@angular/core';

export interface Pill {
  label: string;
};

@Component({
  selector: 'saa-pills',
  templateUrl: './pills.component.html'
})

export class PillsComponent {
    @Input() pills: Pill[] = [];
    selectedPill: Pill;

    togglePill(pill: Pill): void {
        this.selectedPill = pill;
    }
}
