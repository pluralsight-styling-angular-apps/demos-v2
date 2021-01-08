import { Component } from '@angular/core';

@Component({
  selector: 'saa-app',
  template: `
    <header>
      <h1>Styling Angular Applications</h1>
      <em>For Angular Versions 2.0+</em>
    </header>
    <div>
      <saa-app-nav></saa-app-nav>
    </div>
  `
})

export class AppComponent {
}