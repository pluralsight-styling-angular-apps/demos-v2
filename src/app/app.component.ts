import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'saa-app',
  encapsulation: ViewEncapsulation.None,
  template: `
      <header>
          <h1>Styling Angular Applications</h1>
          <em>For Modern Angular Applications</em>
      </header>
      <div>
          <saa-app-nav></saa-app-nav>
      </div>
  `,
  styles: [`

      body {
          color: #666;
          font-family: arial, sans-serif;
          margin: 0;
          padding: 1.5em;
      }

      h1 {
          color: #2A9FBC;
          font-size: 200%;
          line-height: 1;
          margin: 0.5em 0 0.25em;
      }

  `]
})

export class AppComponent {
}