import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'saa-app',
    templateUrl: './app.component.html',
    // encapsulation: ViewEncapsulation.None,
    // styleUrls: ['./styles/styles.scss']
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
