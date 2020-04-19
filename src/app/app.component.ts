import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'turnipTrader'; 
  constructor(public afAuth: AngularFireAuth){
    //put my callback here on logout
  }
}
 