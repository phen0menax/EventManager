import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    

  firebase.initializeApp({
    apiKey: "AIzaSyB6PIqf4dQJqIT4rYBnS4DL0bxMNSQaKo4",
    authDomain: "myeventmanager-4d768.firebaseapp.com",
    databaseURL: "https://myeventmanager-4d768.firebaseio.com",
    projectId: "myeventmanager-4d768",
    storageBucket: "",
    messagingSenderId: "771471377446"
  });


  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      this.rootPage = 'login';
    unsubscribe();
    } else {
      this.rootPage = HomePage;
    unsubscribe();
    }
  });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

