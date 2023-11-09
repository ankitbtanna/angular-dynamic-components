import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Cat, Dog } from '../app.model';
import { CatItemComponent } from '../cat-item/cat-item.component';
import { DogItemComponent } from '../dog-item/dog-item.component';

@Component({
  selector: 'angular-dynamic-components-member-item',
  templateUrl: './member-item.component.html',
})
export class MemberItemComponent implements OnInit {
  @Input() member: any;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainerRef.clear();
    const cat = this.member as Cat;
    const dog = this.member as Dog;

    if (cat.favoriteComfyPlace) {
      const componentRef =
        this.viewContainerRef.createComponent(CatItemComponent);
      componentRef.instance.member = cat;
    }

    if (dog.favoritePark) {
      const componentRef =
        this.viewContainerRef.createComponent(DogItemComponent);
      componentRef.instance.member = dog;
    }
  }
}
