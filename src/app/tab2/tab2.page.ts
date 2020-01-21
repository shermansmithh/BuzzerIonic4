
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { FcmProvider } from '../services/fcm/fcm';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user: any = {}
  constructor(private router: Router,
    private fireAuth: AngularFireAuth, public fcm: FcmProvider,  private toastCtrl: ToastController) {

            // Get FCM and listen to push notifications
            this.getFCMandListenNotifications()
    }

    ngOnInit() {
      this.fireAuth.auth.onAuthStateChanged(user => {
        if (user) {
          this.user = {
            uid: user.uid,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime,
            isAnonymous: user.isAnonymous,
            email: user.email,
            displayName: user.displayName,
            emailVerified: user.emailVerified,
            refreshToken: user.refreshToken
          }
          console.log(user)
        }
        else {
          this.router.navigate(["/tab3"]);
        }
      })
    }

    logout() {
      this.fireAuth.auth.signOut().then(() => {
        this.router.navigate(["/home"]);
      })
    }

    async getFCMandListenNotifications() {
      // Get a FCM token
      this.fcm.getToken()
      // Listen to incoming messages
       this.fcm.listenToNotifications().pipe(
          tap(msg => {
            console.log(msg)
            // const toastz =  this.toastCtrl.create({
            //       message: msg.body,
            //       duration: 7000,
            //       position: 'top'
            //   });
            //  toastz.present();


          })


      ).subscribe()
  }
}
