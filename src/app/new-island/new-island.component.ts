import { Component, OnDestroy, NgZone } from '@angular/core';
import { Island } from '../island'
import { FormGroup, FormControl } from '@angular/forms'
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-island',
  templateUrl: './new-island.component.html',
})
export class NewIslandComponent implements OnDestroy{

  minhaIlha: Island;
  destroy = new Subject();
  syncUid: string;
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone) {
    this.afAuth.user.pipe(
      takeUntil(this.destroy)

    ).subscribe( user =>
      {
      this.syncUid = user.uid
    });
  }

  newIsland = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl('')  
  });

  createIsland(event){
    event.preventDefault();

    this.minhaIlha = this.newIsland.value;
    this.minhaIlha.date = new Date().toISOString();
    console.log(this.minhaIlha);
    this.db.object(`/islands/${this.syncUid}`).set(this.minhaIlha)
    .then((result) => {
      this.ngZone.run(() => { this.router.navigateByUrl('/') });
    })
    .catch(err => console.error);


  }

  ngOnDestroy(){
    this.destroy.next();
  }

}


