import { Component } from '@angular/core';
import { Dog } from '../app.model';

@Component({
  selector: 'angular-dynamic-components-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.scss'],
})
export class DogItemComponent {
  member: Dog | undefined;
}
