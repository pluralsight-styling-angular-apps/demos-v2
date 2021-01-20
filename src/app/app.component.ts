import { Component } from '@angular/core';

@Component({
    selector: 'saa-app',
    templateUrl: './app.component.html',
    styleUrls: ['./scss/globals.scss', './scss/header.scss', './scss/content.scss', './scss/footer.scss']
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
