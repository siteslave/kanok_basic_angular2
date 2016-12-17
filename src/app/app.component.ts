import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test: any;
  age: number = 20;
  friends: Array<string> = [];
  title = 'Angular 2!';

  constructor() {
    this.test = 20;
    this.test = 'Hello';

    // this.showName('Angular');
    // alert(this.getAge());

    this.setFriends('A', 'B', 'C', 'D', 'E');

    this.friends.push('Bill Gate');
    this.friends.push('John Doe');
  }
  showName(name: string): any {
    alert(name);
  } 

  getAge(): number {
    return 20
  }

  setFriends(first, second, ...other) {
    console.log(first)
    console.log(second)
    console.log(other)
  }
}
