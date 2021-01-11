import { Component } from '@angular/core';

@Component({
    selector: 'saa-app-nav',
    template: `
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
    `,
    styleUrls: ['./app-nav.component.css']
})

export class AppNavComponent {
}
