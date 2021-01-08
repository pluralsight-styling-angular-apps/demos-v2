import { Component } from '@angular/core';

@Component({
  selector: 'saa-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss']
})

export class ModalComponent {
    isOpen = false;

    toggleOpenClose() {
        if (!this.isOpen) {
            this.isOpen = true;
        } else {
            this.isOpen = false;
        }
    }

}