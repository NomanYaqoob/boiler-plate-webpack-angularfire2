import { Component } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2"
@Component({
  selector: 'my-app',
  template: `<ul>
              <li *ngFor="let item of items | async">{{item['$value']}}</li>
            </ul>`
})
export class AppComponent {
  items: any;
  constructor(private af: AngularFire) {
    this.items = af.database.list('/items');
  }
}
