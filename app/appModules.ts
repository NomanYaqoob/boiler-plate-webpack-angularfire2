import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Your App Configuration which can found on firebase.google.com
export var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};
// Your App Configuration which can found on firebase.google.com

@NgModule({
  imports: [BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
