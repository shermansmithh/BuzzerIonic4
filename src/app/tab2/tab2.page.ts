
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user: any = {}
  constructor(private router: Router,
    private fireAuth: AngularFireAuth) {

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
}
