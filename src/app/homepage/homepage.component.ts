import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Island } from '../island'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  
  islands: AngularFireList<Island> = this.db.list('/islands');
  islandData = this.islands.snapshotChanges().pipe(
    map(actions => 
      actions.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        const value = {key, ...data};
        return value;
      }))
  );
  
  constructor(private db: AngularFireDatabase){ }

}
