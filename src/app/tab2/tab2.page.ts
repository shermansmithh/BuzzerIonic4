
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { FCM } from '@ionic-native/fcm/ngx';
import { tap } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user: any = {}
  constructor(private router: Router,
    private fireAuth: AngularFireAuth, public fcm: FCM,  private toastCtrl: ToastController) {

     // Get FCM and listen to push notifications
     this.getFCMandListenNotifications()
    }

    
    ngOnInit() {
      this.fcm.subscribeToTopic(firebase.auth().currentUser.uid)

      //  var vm = this
      // this.fireAuth.auth.onAuthStateChanged(user => {
      //   if (user) {
      //     this.user = {
      //       uid: user.uid,
      //       phoneNumber: user.phoneNumber,
      //       photoURL: user.photoURL,
      //       creationTime: user.metadata.creationTime,
      //       lastSignInTime: user.metadata.lastSignInTime,
      //       isAnonymous: user.isAnonymous,
      //       email: user.email,
      //       displayName: user.displayName,
      //       emailVerified: user.emailVerified,
      //       refreshToken: user.refreshToken
      //     }

      //     vm.fcm.subscribeToTopic(firebase.auth().currentUser.uid)
      //   }
      //   else {
      //     this.router.navigate(["/tab3"]);
      //   }
      // })
    }

    logout() {
      this.fireAuth.auth.signOut().then(() => {
        this.router.navigate(["/tab1"]);
      })
    }

    async getFCMandListenNotifications() {
      var vm = this
      // Get a FCM token
      this.fcm.getToken()
      // Listen to incoming messages
      this.fcm.onNotification().subscribe(data => {
        if (data) {
        vm.showToast(data.body)
        }
    
      });
    }


  showToast(message) {
     this.toastCtrl.create({
      message: message,
      duration: 7000,
      position: 'top'
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }
}
