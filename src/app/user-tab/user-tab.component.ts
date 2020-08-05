import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {

  profileName = 'Username_Here';
  profileTag = '@UsernameTag';
  profileWatchig = 245;
  profileFollowers = 124;
  topHash = ['food', 'digitalart', 'pets', 'city', 'road'];

  constructor() { }

  ngOnInit(): void {
  }

}
