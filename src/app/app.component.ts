import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'saa-app',
  encapsulation: ViewEncapsulation.ShadowDom,
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

      :host {
          color: #666;
          display: block;
          font-family: arial, sans-serif;
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