import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabsPaneComponent } from './tabs-pane/tabs-pane.component';

@Component({
    selector: 'saa-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements AfterContentInit {
    @ContentChildren(TabsPaneComponent) tabs: QueryList<TabsPaneComponent>;

    ngAfterContentInit(): void {
        const activeTabs = this.tabs.filter(tab => tab.active);
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    private selectTab(tab: TabsPaneComponent): void {
        this.tabs.forEach(tab => tab.active = false);
        tab.active = true;
    }
}
