import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  /*template: `
  <h1> : {{ (item | async)?.name }} : </h1>
  <h1>{{ item | async | json }}</h1>
  <input type="text" #newname placeholder="Name" />
  <input type="text" #newsize placeholder="Size" />
  <br />
  <button (click)="save(newName.value)">Set Name</button>
  <button (click)="update(newsize.value)">Update Size</button>
  <button (click)="delete()">Delete</button>
  `,*/ 
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'sampleApp';
  item: FirebaseObjectObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.item = db.object('/item');
  }
  save(newName: string) {
    const promise = this.item.set({ name: newName });
    promise
    .then(_ => console.log('success'))
    .catch(err => console.log(err,'You dont have access!'));
  }
  update(newSize: string) {
    const promise = this.item.update({ size: newSize });
    promise
    .then(_ => console.log('success'))
    .catch(err => console.log(err,'You dont have access!'));
  } 
  delete() {
    const promise = this.item.remove();
    promise
      .then(_ => console.info('success'))
      .catch(err => console.info(err,'You dont have access!'));
  }
}

/* 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
 */