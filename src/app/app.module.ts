import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';
import { UsersComponent } from './users/users.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    GroupsComponent,
    UsersComponent,
    GroupDetailComponent,
    UserDetailComponent,
    ProfileComponent,
    LogoutComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
