import { Component } from '@angular/core';
import { Cat } from '../app.model';

@Component({
  selector: 'angular-dynamic-components-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.scss'],
})
export class CatItemComponent {
  member: Cat | undefined;
}
