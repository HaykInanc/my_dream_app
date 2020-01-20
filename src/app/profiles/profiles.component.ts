import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.sass']
})
export class ProfilesComponent implements OnInit {
  users:Array<object> = [];
  constructor() { }

  ngOnInit() {
    this.users.push({name: 'Гайк', lastName: "Инанц", age:27});
    this.users.push({name: 'Анатолий', lastName: "Ушанов", age:27});
    this.users.push({name: 'Юрий', lastName: "Митрофанов", age:42});
  }

}
