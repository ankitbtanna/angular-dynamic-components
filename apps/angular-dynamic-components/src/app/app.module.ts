import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CatItemComponent } from './cat-item/cat-item.component';
import { DogItemComponent } from './dog-item/dog-item.component';
import { MemberItemComponent } from './member-item/member-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CatItemComponent,
    DogItemComponent,
    MemberItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
