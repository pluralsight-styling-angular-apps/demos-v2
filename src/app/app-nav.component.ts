import { Component } from '@angular/core';

@Component({
    selector: 'saa-app-nav',
    template: `
        <link rel="stylesheet" href="app/app-nav.component.css" />
        <div>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Prerequisites</a>
                </li>
                <li>
                    <a href="#">Modules</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </div>
    `
})

export class AppNavComponent {
}