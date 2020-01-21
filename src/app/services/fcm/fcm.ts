import { Injectable } from '@angular/core';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {
  userId : any

  constructor(
    public firebaseNative: FirebaseX,
    public afs: AngularFirestore,
    private platform: Platform
  ) {
    this.userId = firebase.auth().currentUser.uid;
  }

  // Get permission from the user
  async getToken() {

    let token;
    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken();
    } 

  
    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    } 
    
    return this.saveTokenToFirestore(token)
  }


  async getTokenDevice(){
    let token;
    token = this.firebaseNative.getToken();

    return token
  }

  subribeUIDtoTopic(topic){
    this.firebaseNative.subscribe(topic)
  }

  unsubribeUIDtoTopic(topic){
    this.firebaseNative.unsubscribe(topic)
  }


  // Save the token to firestore
  private saveTokenToFirestore(token) {
    if (!token) return;
  
    const devicesRef = this.afs.collection('devices')
  
    const docData = { 
      token,
      userId: this.userId
    }
  
    return devicesRef.doc(token).set(docData)
  }

  // Listen to incoming FCM messages
  listenToNotifications() {
    return this.firebaseNative.onMessageReceived()
  }

}
