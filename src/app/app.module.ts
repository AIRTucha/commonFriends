import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VKService } from './vk.service';
import { UserInputComponent } from './user-input.component';
import { FriendsIntersectionComponent } from './friends-intersection.component';
import { ActiveUsersListComponent } from './active-users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    FriendsIntersectionComponent,
    ActiveUsersListComponent
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
