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
    styles: [`

        div {
            background: #2A9FBC;
            border-radius: 0.5em;
            margin: 1.5em 0;
            padding: 1em 1.2em;
        }

        ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        a {
            color: #fff;
            padding: 0 1em;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

    `]
})

export class AppNavComponent {
}