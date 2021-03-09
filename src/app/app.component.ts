import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'saa-app',
    templateUrl: './app.component.html',
    // encapsulation: ViewEncapsulation.None,
    // styleUrls: [
    //     './shared/scss/root/normalize.scss',
    //     './shared/scss/root/root.scss',
    //     './shared/scss/root/links.scss',
    //     './shared/scss/layout/app-footer.scss',
    //     './shared/scss/layout/app-header.scss',
    //     './shared/scss/layout/layout.scss',
    //     './shared/scss/typography/headers.scss',
    //     './shared/scss/typography/paragraphs.scss'
    // ]
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
