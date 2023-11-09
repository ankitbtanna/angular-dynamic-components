import { Component } from '@angular/core';
import { MEMBERS } from './app.const';

@Component({
  selector: 'angular-dynamic-components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-dynamic-components';
  members = MEMBERS;
}
