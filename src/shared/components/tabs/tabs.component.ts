import {ChangeDetectionStrategy, Component, input, linkedSignal, output, WritableSignal} from '@angular/core';
import {Tab} from './tads.interface';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-tabs',
  imports: [
    NgClass
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  public tabs = input<Tab[]>([]);

  public tabClick = output<Tab>();

  public activeTab: WritableSignal<Tab> = linkedSignal(() => this.tabs()[0]);

  public onTabClick(tab: Tab) {
    this.activeTab.set(tab);
    this.tabClick.emit(tab);
  }
}
