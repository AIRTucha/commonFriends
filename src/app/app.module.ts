import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VKService } from './vk.service';
import { UserInputComponent } from './user-input.component';
import { FriendsIntersectionComponent } from './friends-intersection.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    FriendsIntersectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [VKService],
  bootstrap: [AppComponent]
})
export class AppModule { }
