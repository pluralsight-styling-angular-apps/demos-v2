import { Component } from '@angular/core';

@Component({
    selector: 'saa-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    pills = [
        { 
            label: 'HTML'
        },
        { 
            label: 'CSS'
        },
        { 
            label: 'SASS'
        }
    ];
}
