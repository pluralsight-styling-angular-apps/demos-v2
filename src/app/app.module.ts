import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { AppComponent }    from './app.component';
import { AppNavComponent } from './app-nav.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      AppComponent,
      AppNavComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }