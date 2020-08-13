import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './post/post.component';
import { DataImportService } from './_services/data-import.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTabComponent } from './user-tab/user-tab.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    UserProfileComponent,
    UserTabComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DataImportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
