import { Component } from '@angular/core';
import { ClickerZoneComponent } from '../clicker-zone/clicker-zone.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ClickerZoneComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
