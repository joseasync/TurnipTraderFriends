import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ViewIslandComponent } from './view-island/view-island.component';
import { MyIslandComponent } from './my-island/my-island.component';
import { NewIslandComponent } from './new-island/new-island.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule  } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ViewIslandComponent,
    MyIslandComponent,
    NewIslandComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp({
      //privateCode
    }),
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
