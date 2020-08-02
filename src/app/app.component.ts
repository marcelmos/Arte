import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-network';
  profileName = 'Username_Here';
  profileTag = '@UsernameTag';
  profileWatchig = 245;
  profileFollowers = 124;
  topHash = ['food', 'digitalart', 'pets', 'city', 'road'];

}
