import { Component } from '@angular/core';
import { ClickerZoneComponent } from '../clicker-zone/clicker-zone.component';
import { MenuScreenComponent } from '../menu-screen/menu-screen.component';
import { OptionsMenuComponent } from '../options-menu/options-menu.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ClickerZoneComponent, MenuScreenComponent, OptionsMenuComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
