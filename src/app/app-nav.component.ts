import { Component } from '@angular/core';

@Component({
    selector: 'saa-app-nav',
    template: `
        <div style="background: #2A9FBC; border-radius: 0.5em; margin: 1.5em 0; padding: 1em 1.2em;">
            <ul style="display: flex; list-style: none; margin: 0; padding: 0;">
                <li>
                    <a href="#" style="color: #fff; padding: 0 1em; text-decoration: none;">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" style="color: #fff; padding: 0 1em; text-decoration: none;">
                        Prerequisites
                    </a>
                </li>
                <li>
                    <a href="#" style="color: #fff; padding: 0 1em; text-decoration: none;">
                        Modules
                    </a>
                </li>
                <li>
                    <a href="#" style="color: #fff; padding: 0 1em; text-decoration: none;">
                        About
                    </a>
                </li>
            </ul>
        </div>
    `
})

export class AppNavComponent {
}