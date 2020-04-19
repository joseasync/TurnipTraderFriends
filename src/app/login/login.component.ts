import { Component, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  authUser = this.afAuth.user;

  constructor(private afAuth: AngularFireAuth, private zone: NgZone, private router: Router) { }

  loginGoogle(){
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((result) => {
      this.zone.run(() => { this.router.navigateByUrl('/') });
    })
    .catch(err => console.error);
    
  }


  loginFacebook(){
    this.afAuth.signInWithPopup(new auth.FacebookAuthProvider())
    .then((result) => {
      this.zone.run(() => { this.router.navigateByUrl('/') });
    })
    .catch(err => console.error);
    
  }

}
