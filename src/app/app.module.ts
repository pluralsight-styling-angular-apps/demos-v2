import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { AppComponent }             from './app.component';
import { PromoComponent }           from './promo/promo.component';

// Content Components
import { AccordionComponent }       from './shared/components/content/accordion/accordion.component'
import { AccordionPaneComponent }   from './shared/components/content/accordion/accordion-pane/accordion-pane.component'
import { TabsComponent }            from './shared/components/content/tabs/tabs.component'
import { TabsPaneComponent }        from './shared/components/content/tabs/tabs-pane/tabs-pane.component'
import { ThumbnailListComponent }   from './shared/components/content/thumbnail-list/thumbnail-list.component'
import { MessageComponent }         from './shared/components/content/message/message.component'

// Navigation Components
import { NavBarPrimaryComponent }   from './shared/components/navigation/navbar-primary/navbar-primary.component'
import { NavBarSecondaryComponent } from './shared/components/navigation/navbar-secondary/navbar-secondary.component'
import { PillsComponent }           from './shared/components/navigation/pills/pills.component'

// PopUp Components
import { ModalComponent }           from './shared/components/popups/modal/modal.component'
import { ToolTipComponent }         from './shared/components/popups/tooltip/tooltip.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      AppComponent,
      PromoComponent,
      AccordionComponent,
      AccordionPaneComponent,
      TabsComponent,
      TabsPaneComponent,
      MessageComponent,
      ThumbnailListComponent,
      NavBarPrimaryComponent,
      NavBarSecondaryComponent,
      PillsComponent,
      ModalComponent,
      ToolTipComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }